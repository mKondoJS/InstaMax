import Vue from 'vue';
import VueRouter from 'vue-router';
import Feed from './Feed.vue';
import Login from './Login.vue';
import Container from './Container.vue';
import store from './overvue/store';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/feed', component: Feed },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

store.createStateStream().subscribe(state => console.log('Initial State', state));

const app = new Vue({
  el: '#App',
  store,
  router,
  render: h => h(Container),
});
