import { Request, Response } from 'express';

import { LandmarkDetectService } from '../services/LandmarkDetectService';

export class LandmarkDetectController {
  public async detect(req: Request, res: Response) {
    const service = new LandmarkDetectService;
    const imageEncoded = Buffer.from(req.file.buffer).toString('base64');
    const response: any = await service.landmarkDetect(imageEncoded);
    res.send(response);
  }
}