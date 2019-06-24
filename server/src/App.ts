import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { LabelDetectRoute } from './routes/LabelDetectRoute';

class App {
  public app = express.application;
  private labelDetectRoute = new LabelDetectRoute();

  constructor() {
    this.app = express();
    this.config();
    this.labelDetectRoute.routes(this.app);
  }

  private config() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
}

export default new App().app;