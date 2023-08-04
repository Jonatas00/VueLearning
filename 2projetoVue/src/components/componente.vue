<template>
    <div>
        <h1>Olá, Vue!</h1>
        <p>Meu nome é {{ nome }} e eu sou um {{ profissao }}</p>
        <MultiplosEventos />

        <Reutilizacao />
        <Reutilizacao />
        <Reutilizacao />
    </div>
</template>

<script>
    import MultiplosEventos from "./MultiplosEventos.vue"
    import Reutilizacao from "./Reutilizacao.vue"

    export default {
        name: 'componente',
        components: {
            MultiplosEventos,
            Reutilizacao
        },
        data() {
            return {
                nome: "Jonatas",
                profissao: "Dev"
            }
        }
    }
</script>
