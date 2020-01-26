<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Voertuig toevoegen</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field label="Naam" v-model="localVehicle.name" />
        <v-text-field label="Kenteken" v-model="localVehicle.registration" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="addVehicle">Toevoegen</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    vehicle: Object
  },
  data: ()=>({
      localVehicle: {
        name: "",
        registration: "",
        photoUrl: ""
      }
  }),
  watch: {
      vehicle: {
          immediate: true,
          handler: function(vehicle){
              if(vehicle){
                  this.localVehicle = vehicle;
              }
          }
      }
  },
  computed: {
    ...mapGetters({
      db: "db"
    })
  },
  methods: {
    ...mapActions({
      addSuccess: "addSuccess",
      addError: "addError"
    }),
    addVehicle() {
      this.db
        .collection("vehicles")
        .add(this.localVehicle)
        .then(() => this.addSuccess("Voertuig toegevoegd"))
        .catch(error => this.addError(error.message))
        .then(
          () => (this.localVehicle = { name: "", registration: "", photoUrl: "" })
        );
    }
  }
};
</script>
