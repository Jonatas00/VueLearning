<template>
  <button @click="$emit('clicou')">Clique no botão</button>
</template>
<script>
  export default {
    name: 'Botao',
    emits: [
      'clicou'
    ]
  }
</script>