import Vue from 'vue';
import OverVue, { Store } from '../../../overvue_node_modules/OverVue';

Vue.use(OverVue);
let store;

export default store = new Store({
  state: {
    username: '',
    password: '',
    feedUrls: null,
    users: {
      frodo: { fullName: 'Frodo Baggins', password: 'baggins' },
      samwise: { fullName: 'Samwise Gamgee', password: 'gamgee' },
      meriadoc: { fullName: 'Meriadoc Brandybuck', password: 'brandybuck' },
      pippin: { fullName: 'Pippin Took', password: 'took' },
    },
  },
  getters: {
    getName: state => state.name,
  },
});
