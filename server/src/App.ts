import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { IndexRoutes } from './routes/IndexRoutes';

class App {
  public app = express.application;
  private indexRoutes = new IndexRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.indexRoutes.routes(this.app);
  }

  private config() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
}

export default new App().app;