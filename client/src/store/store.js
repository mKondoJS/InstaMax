import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username: '',
    password: '',
    feedUrls: null,

    // userImage: 'string',
    users: {
      frodo: { fullName: 'Frodo Baggins', password: 'baggins' },
      samwise: { fullName: 'Samwise Gamgee', password: 'gamgee' },
      meriadoc: { fullName: 'Meriadoc Brandybuck', password: 'brandybuck' },
      pippin: { fullName: 'Pippin Took', password: 'took' }
    },
  },
  getters: {
    getUsername: state => state.username,
    getUserFullName: state => state.users[state.username].fullName,
    getFeedUrls: state => state.feedUrls,
    getFeedUrl: state => state.feedUrls[Math.floor(Math.random() * state.feedUrls.length)],
  },
  mutations: {
    setUsername: (state, payload) => {
      state.username = payload;
    },

    setPassword: (state, payload) => {
      state.password = payload;
    },

    setFeedUrls: (state, payload) => {
      state.feedUrls = payload;
    },
  },
  actions: {
    commitUsernameAndPassword: ({ commit }, payload) => {
      console.log('in action', payload, $('#user').val());
      commit('setUsername', $('#user').val());
      commit('setPassword', $('#password').val());
    },

    commitFeedUrls: ({ commit }, payload) => {
      console.log("commitFeedUrls");
      commit('setFeedUrls', payload);
    },
  },
  modules: {

  },
});
