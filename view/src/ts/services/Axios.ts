import Axios from 'axios';
import 'url-search-params-polyfill';

export const axios = Axios.create();
axios.defaults.timeout = 30000;
