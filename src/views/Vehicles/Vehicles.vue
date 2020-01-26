<template>
  <v-container align="center" justify="center">
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title>Voertuig toevoegen</v-toolbar-title>
        <v-spacer />
        <v-btn @click="toggle = !toggle" outlined color="secondary">
          <v-icon>
            {{ toggle ? "mdi-chevron-up" : "mdi-chevron-down" }}
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text v-if="toggle">
        <VehicleForm v-bind:vehicle="newVehicle"></VehicleForm>
      </v-card-text>
      <v-card-actions v-if="toggle">
        <v-spacer />
        <v-btn @click='addVehicle'>Toevoegen</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-for="vehicle in vehicles" :key="vehicle._id">
      <v-card-title>{{ vehicle.name }}</v-card-title>
    </v-card>
  </v-container>
</template>
<script>
import VehicleForm from "@/components/VehicleForm";
import firebase from "../../plugins/firebase";
import { mapGetters } from "vuex";
const db = firebase.firestore();
const users = db.collection("users");

export default {
  data: () => ({
    vehicles: [],
    toggle: false,
    newVehicle: {}
  }),
  methods: {
    addVehicle(){
      users.doc(this.user.data.uid).collection('vehicles').add(this.newVehicle);
      this.newVehicle = {};
      this.toggle = false;
    }
  },
  watch: {
    vehicles(vehicles) {
      if (vehicles.length === 0) {
        this.toggle = true;
      }
    },
    user: {
      immediate: true,
      handler: function(user) {
        if (user.loggedIn) {
          this.$bind('vehicles', users.doc(user.data.uid).collection('vehicles'));
        } else {
          this.vehicles = [];
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  components: {
    VehicleForm
  }
};
</script>
