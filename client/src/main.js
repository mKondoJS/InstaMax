import Vue from 'vue';
import App from './App.vue';

import { store } from './store/store';

new Vue({
  el: '#ATTACH ELEMENT HERE',
  store,
  render: h => h(App),
});
