<template>
  <v-container class="fill-height" fluid>
    <v-row class="d-flex" align="center" justify="center">
      <v-col class="align-self-start" cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>Wachtwoord vergeten</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert v-if="error" outlined dense color="error">
              {{ error }}
            </v-alert>
            <v-alert v-if="message" outlined dense color="success">
              {{ message }}
            </v-alert>
            <v-form v-on:submit.prevent="send">
              <v-text-field label="E-mailadres" v-model="email" required />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn submit color="primary">Wachtwoord resetten</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from "../initFirebase";
const auth = firebase.auth();

export default {
  methods: {
    send() {
      this.error = this.message = null;
      auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.message = "Er is een email verstuurd naar: ".this.email;
          this.email = "";
        })
        .catch(error => {
          this.error = error.message;
        });
    }
  },
  data: () => ({
    error: null,
    message: null,
    email: ""
  })
};
</script>
