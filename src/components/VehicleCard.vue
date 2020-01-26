<template>
  <v-card>
    <v-card-title>{{ vehicle.name }}</v-card-title>
    <v-card-subtitle>{{ vehicle.registration }}</v-card-subtitle>
    <v-card-text>
      Here some content
    </v-card-text>
    <v-card-actions>
      <v-btn @click="remove" icon color="red">
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        @click="toggleFavorite"
        icon
        v-bind:color="vehicle.isFavorite ? 'pink' : ''"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    vehicle: Object
  },
  computed: {
    ...mapGetters({
      db: "db"
    })
  },
  methods: {
    ...mapActions({
      addError: "addError",
      addSuccess: "addSuccess"
    }),
    toggleFavorite() {
      const isFavorite = !this.vehicle.isFavorite;
      const successMessage =
        this.vehicle.name +
        (isFavorite
          ? " is toegevoegd aan favorieten"
          : " is geen favoriet meer");
      this.db
        .collection("vehicles")
        .doc(this.vehicle.id)
        .update({ isFavorite: isFavorite })
        .then(() => this.addSuccess(successMessage))
        .catch(error => this.addError(error.message));
    },
    remove() {
      if (!confirm("Weet je het zeker?")) return;
      this.db
        .collection("vehicles")
        .doc(this.vehicle.id)
        .delete()
        .then(() => this.addSuccess("Voertuig verwijderd"))
        .catch(error => this.addError(error.message));
    }
  }
};
</script>
