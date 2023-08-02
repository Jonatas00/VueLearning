<template>
    <div>
        <h1>Olá, Vue!</h1>
        <p>Meu nome é {{ nome }} e eu sou um {{ profissao }}</p>
    </div>
</template>

<script>
    export default {
        name: 'componente',
        data() {
            return {
                nome: "Jonatas",
                profissao: "Dev"
            }
        }
    }
</script>
