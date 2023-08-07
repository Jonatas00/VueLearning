<template>
    <p>Olá meu email é: {{ email }}</p>
</template>
<script>
    export default {
        name:'InfoEmail',
        props: {
            email: String
        }
    }
</script>