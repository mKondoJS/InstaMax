import Vue from 'vue';
import { Overvue, Store } from 'overvue-rx';

Vue.use(Overvue);
let store;

export default store = new Store({
  state: {
    username: '',
    password: '',
    feedItems: null,
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
