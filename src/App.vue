<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item @click="logout" v-if="user">
          {{ user.displayName }}
        </v-list-item>
        <v-list-item v-else @click="login" link>
          Login
        </v-list-item>

        <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark" link>
          Toggle dark mode
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


export default {
  name: 'App',
  
  components: {
    HelloWorld,
  },
  mounted(){
    auth.onAuthStateChanged((user) => {
      this.user = user
    });
  },
  data: () => ({
    drawer: false,
    user: {}
  }),
  methods: {
    login(){
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    },
    logout(){
      auth.signOut();
    }
  }
};
</script>
