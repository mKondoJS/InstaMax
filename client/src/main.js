import Vue from 'vue';
import Feed from './Feed.vue';
import Login from './Login.vue';
import Container from './Container.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/feed', component: Feed },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

import store from './overvue/store';
store.createStateStream().subscribe(state => console.log('Initial State', state));

/*
const vmApp = new Vue({
  el: '#app',
  store,
  render: h => h(Feed),
});
*/

const app = new Vue({
  el: '#App',
  store,
  router,
  render: h => h(Container),
});
