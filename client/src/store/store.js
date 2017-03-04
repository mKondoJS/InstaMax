import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username,
    password,
    userImage: 'string',
    users: {
      'frodo'    : 'Frodo Baggins',
      'samwise'  : 'Samwise Gamgee',
      'meriadoc' : 'Meriadoc Brandybuck',
      'pippin'   : 'Pippin Took'
    },
    posters: {
      0 : { name: 'sauron_trump2020', img: 'sauron'},
      1 : { name: 'Grey_Wanderer', img: 'gandalf' },
      2 : { name: 'elfonashelf', img: 'arwen' },
      3 : { name: 'OneDoesNotSimply', img: 'boromir' },
    },
  },
  getters,
  mutations,
  actions,
  modules: {
    
  },

});
