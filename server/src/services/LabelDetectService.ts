import request from 'request-promise';

import { googleApiConfig } from '../config/GoogleApiConfig';
import { labelDetectResponse } from '../constants/LabelDetectResponse';

export class LabelDetectService {
  public async labelDetect(srcFile): Promise<Object> {
    return labelDetectResponse;
  }
}