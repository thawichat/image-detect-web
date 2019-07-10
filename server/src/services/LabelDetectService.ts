import request from 'request-promise';

import { googleApiConfig } from '../config/GoogleApiConfig';
import { imageDetectResponse } from '../constants/ImageResponse';
import { ResultCode } from '../constants/ResultCode';

export class LabelDetectService {
  public async labelDetect(srcFile): Promise<Object> {
    googleApiConfig.body.requests[0].image.content = srcFile;
    googleApiConfig.body.requests[0].features.type = 'LABEL_DETECTION';
    googleApiConfig.body.requests[0].features.maxResults = 10;

    const options = {
      method: 'POST',
      url: googleApiConfig.endpoint + googleApiConfig.apiKey,
      json: true,
      body: googleApiConfig.body
    }
    
    await request(options).then((result) => {
      imageDetectResponse.data = [];
      imageDetectResponse.result = ResultCode.OK;

      result.responses[0].labelAnnotations.forEach((data) => {
        imageDetectResponse.data.push({
          description: data.description,
          score: (data.score * 100).toFixed(2),
        });
      });
    }).catch((err) => {
      console.log(err);
      imageDetectResponse.result = ResultCode.FAIL;
    });
    
    return imageDetectResponse;
  }
}