<template>
  <button @click="$emit('exibirEmail')">Clique para exibir o email</button>
</template>
<script>
  export default {
    name: 'BotaoEmail',
    emits: [
      'exibirEmail'
    ]
  }
</script>