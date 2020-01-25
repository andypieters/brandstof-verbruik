<template>
  <v-container class="fill-height" fluid>
    <v-row class="d-flex" align="center" justify="center">
      <v-col class="align-self-start" cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>Wachtwoord vergeten</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
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
import { mapActions } from "vuex";
const auth = firebase.auth();

export default {
  methods: {
    ...mapActions({
      addError: "addError",
      addSuccess: "addSuccess"
    }),
    send() {
      this.error = this.message = null;
      auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          const message = "Er is een email verstuurd naar: ".this.email;
          this.addSuccess(message);
          this.email = "";
        })
        .catch(error => {
          this.addError(error.message);
        });
    }
  },
  data: () => ({
    email: ""
  })
};
</script>
