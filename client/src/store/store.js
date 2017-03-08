import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
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
    getUserFullName: state => state.users[state.username].fullName,
    getUsername: state => state.username,
    getPassword: state => state.username,
    getUsers: state => state.users,
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
      let user = $('#user').val();
      let password = $('#password').val();
      commit('setUsername', user);
      commit('setPassword', password);
    },

    commitFeedUrls: ({ commit }, payload) => {
      console.log('commitFeedUrls');
      commit('setFeedUrls', payload);
    },
  },
  modules: {

  },
  plugins: [createPersistedState()],
});
