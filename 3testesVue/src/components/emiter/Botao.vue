<template>
  <button @click="$emit('clicouNoBotao')">Clique no botão</button>
</template>
<script>
  export default {
    name: 'Botao',
    emits: [
      'clicouNoBotao'
    ]
  }
</script>