<template>
  <div>
    <Picture />
    <br>
    <Email />
  </div>
</template>

<script>
  import Picture from './components/emiter/Picture.vue'
  import Email from './components/props/Email.vue'

  export default {
    name: 'App',
    components: {
      Picture,
      Email
    }
  }
</script>

<style>

</style>
