import multer from 'multer';

import { LandmarkDetectController } from '../controllers/LandmarkDetectController'

export class LandmarkDetectRoute {
  private controller = new LandmarkDetectController();

  public routes(app) {
    app.post('/landmarkdetect', multer().single('file'), this.controller.detect);
  }
}