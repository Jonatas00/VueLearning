<template>
  <BotaoEmail @exibir-email="ExibirEmail"/>
  <p v-show="showEmail">{{ email }}</p>
</template>
<script>
  import BotaoEmail from './BotaoEmail.vue';

  export default {
    name: 'Email',
    components: {
      BotaoEmail
    },
    data () {
      return {
        showEmail: false,
        email: 'djonatas31@gmail.com'
      }
    },
    methods: {
      ExibirEmail() {
        this.showEmail = !this.showEmail
      }
    }
  }

</script>