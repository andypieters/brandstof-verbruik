<template>
  <div>
    <v-alert
      v-for="(message, index) in messages"
      :key="index"
      :type="message.type"
      v-model="showMessage"
      dismissible
    >
      {{ message.message }}
    </v-alert>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: ()=>({
    showMessage: true
  }),
  watch:{
    messages(){
      this.showMessage = true;
    }
  },
  computed: {
    ...mapGetters({
      messages: "messages"
    }),
    ...mapActions({
      deleteMessage: "deleteMessage"
    })
  }
};
</script>
