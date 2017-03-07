import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username: '',
    password: '',
    randomPoster: 0,
    feedUrls: null,
    users: {
      frodo: {fullName: 'Frodo Baggins', password: 'baggins'},
      samwise: {fullName: 'Samwise Gamgee', password: 'gamgee'},
      meriadoc: {fullName: 'Meriadoc Brandybuck', password: 'brandybuck'},
      pippin: {fullName: 'Pippin Took', password: 'took'}
    },
  },
  getters: {
    getUsername: state => state.username,
    getPassword: state => state.username,
    getPoster: state => state.posters[Math.floor(Math.random() * state.posters.length)],
    getPosterImg: state => './client/src/assets/img/' + state.posters[state.randomPoster].img + '.jpg',
    getPosterName: state => state.posters[state.randomPoster].name,
    getFeedUrls: state => state.feedUrls,
    getFeedUrl: state => state.feedUrls[Math.floor(Math.random() * state.feedUrls.length)],
    getRandomPoster: state => state.randomPoster,
  },
  mutations: {
    setUsername: (state, payload) => {
      state.username = payload;
    },

    setPassword: (state, payload) => {
      state.password = payload;
    },

    setRandomPoster: (state, payload) => {
      state.randomPoster = payload;
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
      console.log("commitFeedUrls");
      commit('setFeedUrls', payload);
    },
  },
  modules: {

  },
  plugins: [createPersistedState()],
});
