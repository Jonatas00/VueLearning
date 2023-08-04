<template>
    <div>
        <h1>Olá, Vue!</h1>
        <p>Meu nome é {{ nome }} e eu sou um {{ profissao }}</p>
        <MultiplosEventos />
    </div>
</template>

<script>
    import MultiplosEventos from "./MultiplosEventos.vue"

    export default {
        name: 'componente',
        components: {
            MultiplosEventos
        },
        data() {
            return {
                nome: "Jonatas",
                profissao: "Dev"
            }
        }
    }
</script>
