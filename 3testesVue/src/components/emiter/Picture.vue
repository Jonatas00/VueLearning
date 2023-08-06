<template>
  <Botao @clicou-no-botao="ClicouNoBotao"/>
  <p v-show="podeMostrar">Eba! Você clicou no botão</p>
</template>
<script>
  import Botao from './Botao.vue'

  export default {
    name: 'Picture',
    components: {
      Botao
    },
    data() {
      return {
        podeMostrar: false
      }
    },
    methods: {
      ClicouNoBotao() {
        this.podeMostrar = !this.podeMostrar
      }
    }

  }
</script>