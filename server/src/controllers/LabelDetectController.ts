import { Request, Response } from 'express';

export class LabelDetectController {
  public detect(req: Request, res: Response) {
    res.status(200).send({
      message: 'Hello from label detection controller..!',
    });
  }
}
