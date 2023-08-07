<template>
  <div>
    <Picture />
    <br>
    <InfoEmail />
  </div>
</template>

<script>
  import Picture from './components/emiter/Picture.vue';
  import InfoEmail from './components/props/InfoEmail.vue';

  export default {
    name: 'App',
    components: {
      Picture,
      InfoEmail
    }
  }
</script>

<style>

</style>
