import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    messages: []
  },
  getters: {
    user(state) {
      return state.user;
    },
    messages(state) {
      return state.messages;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    ADD_MESSAGE(state, message) {
      state.messages = [message];
    },
    DELETE_MESSAGE(state, index) {
      state.messages.splice(index, 1);
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        });
      }
    },
    addError({ commit }, message) {
      commit("ADD_MESSAGE", {
        type: "error",
        message: message
      });
    },
    addSuccess({ commit }, message) {
      commit("ADD_MESSAGE", {
        type: "success",
        message: message
      });
    },
    deleteMessage({ commit }, index) {
      commit("DELETE_MESSAGE", index);
    }
  },
  modules: {}
});
