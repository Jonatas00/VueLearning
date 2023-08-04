<template>
  <div>
    <h2>Teste o Data binding aqui:</h2>
    <input type="text" v-model="text" placeholder="Digite aqui">
    <p>{{ text }}</p>
  </div>
</template>
<script>
  export default {
    name: 'DataBinding',
    data() {
      return {
        text: ''
      }
    }
  }
</script>