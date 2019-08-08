import request from 'request-promise';

import { googleApiConfig } from '../config/GoogleApiConfig';
import { imageDetectResponse } from '../constants/ImageResponse';
import { ResultCode } from '../constants/ResultCode';

export class LandmarkDetectService {
  public async landmarkDetect(srcFile): Promise<Object> {
    googleApiConfig.body.requests[0].image.content = srcFile;
    googleApiConfig.body.requests[0].features.type = 'LANDMARK_DETECTION';

    const options = {
      method: 'POST',
      url: googleApiConfig.endpoint + googleApiConfig.apiKey,
      json: true,
      body: googleApiConfig.body
    }
    
    await request(options).then((result) => {
      imageDetectResponse.data = [];
      imageDetectResponse.result = ResultCode.OK;
      
      if (Object.entries(result.responses[0]).length === 0) {
        imageDetectResponse.result = ResultCode.FAIL;
        return;
      }

      imageDetectResponse.data.push({
        description: result.responses[0].landmarkAnnotations[0].description,
        locations: {
          latitude: result.responses[0].landmarkAnnotations[0].locations[0].latLng.latitude,
          longitude: result.responses[0].landmarkAnnotations[0].locations[0].latLng.longitude,
        }
      })
    }).catch((err) => {
      console.log(err);
    });
    
    return imageDetectResponse;
  }
}