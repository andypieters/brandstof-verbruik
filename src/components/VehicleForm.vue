<template>
  <v-form>
    <v-text-field label="Naam" v-model="vehicle.name" />
    <v-text-field label="Kenteken" v-model="vehicle.registration" />
  </v-form>
</template>
<script>
export default {
    props: {
        vehicle: {
            default: () => ({
                name: '',
                registration: '',
                photo: ''
            }),
            type: Object
        }
    }
}
</script>
