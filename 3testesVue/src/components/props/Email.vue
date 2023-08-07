<template>
  <InfoEmail :email="email"/>
</template>
<script>
  import InfoEmail from './InfoEmail.vue';

  export default {
    name: 'Email',
    components: {
      InfoEmail
    },
    data() {
      return {
        email: 'djonatas31@gmail.com',
      }
    }
}
</script>