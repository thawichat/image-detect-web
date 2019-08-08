import { LabelDetectRoute } from './LabelDetectRoute';
import { LandmarkDetectRoute } from './LandmarkDetectRoute';

export class IndexRoutes {
  private labelDetectRoute = new LabelDetectRoute();
  private landmarkDetectRoute = new LandmarkDetectRoute();

  public routes(app) {
    this.labelDetectRoute.routes(app);
    this.landmarkDetectRoute.routes(app);
  }
}