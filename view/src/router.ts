import Vue from 'vue';
import Router from 'vue-router';
import LabelDetect from './views/LabelDetect.vue';
import LandmarkDetect from './views/LandmarkDetect.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: LabelDetect,
    },
    {
      path: '/label',
      name: 'home',
      component: LabelDetect,
    },
    {
      path: '/landmark',
      name: 'about',
      component: LandmarkDetect,
    },
  ],
});
