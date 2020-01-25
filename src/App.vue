<template>
  <v-app>
    <Navigation />
    <v-content>
      <Messages />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Messages from './components/Messages'

export default {
  name: "App",
  components: {
    Navigation,
    Messages
  },
};
</script>
