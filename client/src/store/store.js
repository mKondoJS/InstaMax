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
    randomPoster: 0,
    feedUrls: null,

    // userImage: 'string',
    users: {
      frodo: 'Frodo Baggins',
      samwise: 'Samwise Gamgee',
      meriadoc: 'Meriadoc Brandybuck',
      pippin: 'Pippin Took',
    },
  },
  getters: {
    getUsername: state => state.username,
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
      console.log('in action', payload, $('#user').val());
      commit('setUsername', $('#user').val());
      commit('setPassword', $('#password').val());
    },

    commitRandomPoster: ({ commit }, payload) => {
      const poster = Math.floor(Math.random() * state.posters.length);
      console.log('CommitRandomPoster', poster);
      commit('setRandomPoster', poster);
    },

    commitFeedUrls: ({ commit }, payload) => {
      console.log("commitFeedUrls");
      commit('setFeedUrls', payload);
    },
  },
  modules: {

  },
});
