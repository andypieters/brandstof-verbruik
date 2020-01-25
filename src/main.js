import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import firebase from '@/plugins/firebase'

firebase.auth().onAuthStateChanged(user => store.dispatch("fetchUser", user));

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
