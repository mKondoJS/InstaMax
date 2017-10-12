import Vue from 'vue';
import VueRouter from 'vue-router';
import Feed from './Feed.vue';
import Login from './Login.vue';
import Container from './Container.vue';
import store from './store/store';
import mutate from './store/mutate';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/feed', component: Feed },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// create the motherStream!
store.createStateStream(mutate).subscribe(state => console.log('Initial State', state));

console.log('store', store);

const app = new Vue({
  el: '#App',
  store,
  router,
  render: h => h(Container),
});
