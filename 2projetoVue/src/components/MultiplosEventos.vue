<template>
  <div>
    <button @click="primeiro($event, 'Primeiro evento ativado!'), segundo($event, 'Segundo evento ativado!'), terceiro()">Ativar múltiplos eventos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
  export default {
    name: 'MultiplosEventos',
    data() {
      return {
        multiplos_eventos: ''
      }
    },
    methods: {
      primeiro(e, txt) {
        this.multiplos_eventos = txt
      },
      segundo (e, txt) {
        setTimeout(() => {this.multiplos_eventos = txt}, 1000)
      },
      terceiro(e, txt) {
        setTimeout(() => {this.multiplos_eventos = ""}, 2000)
      }
    }
  }
</script>

<style scoped>
  div {
    margin: 100px;
  }
</style>