<template>
  <div>
    <button @click="ativar">Clique aqui para ativar</button>
    <span v-show="ativou">Ativado!</span>
  </div>
</template>

<script>
  export default {
    name: 'Reutlizacao',
    data() {
      return {
        ativou: false
      }
    },
    methods: {
      ativar() {
        this.ativou = !this.ativou
      }
    }
  }
</script>