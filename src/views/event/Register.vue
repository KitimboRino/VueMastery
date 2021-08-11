<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      // Call to API
      //  If registered sucessfully, then rdirect to event details
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>

<style lang="css" scoped>
</style>