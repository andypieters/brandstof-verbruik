<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>Registreren</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert v-if="error" color="error" dense outlined>{{
              error
            }}</v-alert>
            <v-form v-on:submit.prevent="register">
              <v-text-field
                label="Naam"
                name="displayName"
                v-model="displayName"
              />
              <v-text-field label="E-mailadres" name="email" v-model="email" />
              <v-text-field
                type="password"
                name="password"
                label="Wachtwoord"
                v-model="password"
              />
              <v-text-field
                type="password"
                name="password-confirm"
                label="Wachtwoord nogmaals"
                v-model="passwordConfirm"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn link to="login">Inloggen</v-btn>
            <v-spacer />
            <v-btn color="secondary" @click="register">Registreer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import fb from "../initFirebase";
const auth = fb.auth();

export default {
  data: () => ({
    error: null,
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }),
  methods: {
    register() {
      this.error = null;
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data =>
          data.user.updateProfile({ displayName: this.displayName })
        )
        .then(() => this.$router.push("home"))
        .catch(error => (this.error = error.message));
    }
  }
};
</script>
