<template>
  <div>
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <template v-if="user.loggedIn">
          <v-list-item link to="/">
            {{ user.data.displayName }}
          </v-list-item>
          <v-list-item link to='/vehicles'>
            Voertuigen
          </v-list-item>
          <v-list-item @click="logout" v-if="user.loggedIn">
            Uitloggen
          </v-list-item>
        </template>
        <v-list-item v-else to="/account/login" link>
          Inloggen
        </v-list-item>
        <v-list-item @click="$vuetify.theme.dark = !$vuetify.theme.dark" link>
          {{ $vuetify.theme.dark ? "Light mode" : "Dark mode" }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "@/plugins/firebase";

const auth = firebase.auth();

export default {
  methods: {
    logout() {
      auth.signOut();
    }
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
};
</script>
