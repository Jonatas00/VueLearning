<template>
  <p>Meu email é: {{ email }}</p>
</template>
<script>
  export default {
    name: 'Email',
    props: {
      email: String
    }
}
</script>