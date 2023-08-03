<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando no momento</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>Javascript</li>
            <li>Python</li>
        </ul>

        <p>Você pode visualizar meu GitHub <a v-bind:href="github" target="_blank">aqui</a></p>

    </div>
</template>
<script>
    export default {
        name: 'Info',
        data () {
            return {
                esta_trabalhando: false,
                email: 'djonatas31@gmail.com',
                mostrar_email: false,
                github: "https://github.com/Jonatas00"
            }
        }
    }
</script>