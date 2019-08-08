import { Request, Response } from 'express';

import { LabelDetectService } from '../services/LabelDetectService';

export class LabelDetectController {
  public async detect(req: Request, res: Response) {
    const service = new LabelDetectService();
    const imageEncoded = Buffer.from(req.file.buffer).toString('base64');
    const response = await service.labelDetect(imageEncoded);
    res.status(200).send(response);
  }
}
