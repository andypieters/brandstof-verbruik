<template>
  <v-container class="fill-height" fluid>
    <v-row class="d-flex" align="center" justify="center">
      <v-col class="align-self-start" cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>
              Inloggen
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert v-if="error" outlined dense color="error">
              {{ error }}
            </v-alert>
            <v-form>
              <v-text-field
                label="Email"
                name="email"
                type="text"
                v-model="email"
              />

              <v-text-field
                id="password"
                label="Wachtwoord"
                name="password"
                type="password"
                v-model="password"
              />
            </v-form>
            <v-btn text small to="forgot-password" color="error" link>Wachtwoord vergeten</v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn to="register" color="secundary">Registreren</v-btn>
            <v-spacer />
            <v-btn @click="login" color="primary">Inloggen</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="align-self-start" cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>
              Inloggen via
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-btn @click="loginGoogle">Google</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

import fb from "../initFirebase";

const auth = fb.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default {
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push("home"))
        .catch(error => (this.error = error.message));
    },
    loginGoogle() {
      auth
        .signInWithPopup(googleAuthProvider)
        .then(() => this.$router.push("home"))
        .catch(error => (this.error = error.message));
    }
  },
  data: () => ({
    email: "",
    password: "",
    error: null
  })
};
</script>
