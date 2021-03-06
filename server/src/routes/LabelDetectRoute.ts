import multer from 'multer';

import { LabelDetectController } from '../controllers/LabelDetectController';

export class LabelDetectRoute {
  private controller = new LabelDetectController();

  public routes(app) {
    app.post('/labeldetect', multer().single('file'), this.controller.detect);
  }
}
