import { LabelDetectController } from '../controllers/LabelDetectController';

export class LabelDetectRoute {
  private controller = new LabelDetectController();

  public routes(app) {
    app.get('/labeldetect', this.controller.detect);
  }
}
