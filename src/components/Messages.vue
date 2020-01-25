<template>
  <div>
    <v-alert
      v-for="(message, index) in messages"
      :key="index"
      :type="message.type"
      dismissible
    >
      {{ message.message }}
    </v-alert>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      messages: "messages"
    })
  }
};
</script>
