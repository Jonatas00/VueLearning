<template>
  <div>
    <button @click="$emit('mudarImagem')">Trocar Imagem</button>
  </div>
</template>
<script>
  export default {
    name: 'MudarImagem',
    emits: [
      'mudarImagem',
    ],
    data() {
      return {}
    }
  }
</script>