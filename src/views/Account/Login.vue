<template>
  <v-container>
    <v-row class="d-flex" align="center" justify="center">
      <v-col class="align-self-start" cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>
              Inloggen
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login">
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
            <v-btn text small to="forgot-password" link
              >Wachtwoord vergeten</v-btn
            >
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
import firebase from "firebase/app";
import "firebase/auth";

import fb from "@/plugins/firebase";
import { mapActions } from "vuex";

const auth = fb.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default {
  methods: {
    ...mapActions({
      addEddor: "addError"
    }),
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push("home"))
        .catch(error => this.addEddor(error.message));
    },
    loginGoogle() {
      auth
        .signInWithPopup(googleAuthProvider)
        .then(() => this.$router.push("home"))
        .catch(error => this.addEddor(error.message));
    }
  },
  data: () => ({
    email: "",
    password: ""
  })
};
</script>
