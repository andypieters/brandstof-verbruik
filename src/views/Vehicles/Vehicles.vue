<template>
  <v-container>
      <v-card v-for='vehicle in vehicles' :key="vehicle._id">
          <v-card-title>{{ vehicle.name }}</v-card-title>
      </v-card>
  </v-container>
</template>
<script>
import firebase from "../../plugins/firebase";
import { mapGetters } from "vuex";
const db = firebase.firestore();

export default {
  data: () => ({
    vehicles: []
  }),
  firestore: {
    vehicles: db.collection("users/" + this.user.data.uid + "/vehicles")
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
};
</script>
