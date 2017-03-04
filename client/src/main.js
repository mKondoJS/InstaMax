import Vue from 'vue';
import App from './App.vue';
import Home from './Home.vue';

import { store } from './store/store';

const vmApp = new Vue({
  el: '#app',
  store,
  render: h => h(App),
});


const vmLogin = new Vue({
  el: '#loginApp',
  store,
  render: h => h(Home),
});
