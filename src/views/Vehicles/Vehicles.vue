<template>
  <v-container align="center" justify="center">
    <v-row>
      <v-col
        v-for="vehicle in vehiclesSorted"
        :key="vehicle.id"
        cols="12"
        sm="6"
        md="4"
      >
        <VehicleCard v-bind:vehicle="vehicle" />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <VehicleForm />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VehicleForm from "@/components/VehicleForm";
import VehicleCard from "@/components/VehicleCard";
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    vehicles: []
  }),
  methods: {
    ...mapActions({
      addError: "addError",
      addSuccess: "addSuccess"
    })
  },
  watch: {
    db: {
      immediate: true,
      handler: function(db) {
        if (db) {
          this.$bind("vehicles", db.collection("vehicles"));
        } else {
          this.vehicles = [];
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      user: "user",
      db: "db"
    }),
    vehiclesSorted() {
      let copy = [...this.vehicles];
      copy.sort((a, b) => {
        if ((a.isFavorite && b.isFavorite) || (!a.isFavorite && !b.isFavorite))
          return a.name.localeCompare(b.name);
        if (a.isFavorite && !b.isFavorite) return -1;
        if (!a.isFavorite && b.isFavorite) return 1;
      });
      return copy;
    }
  },
  components: {
    VehicleForm,
    VehicleCard
  }
};
</script>
