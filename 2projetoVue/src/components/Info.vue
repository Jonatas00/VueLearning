<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando no momento</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li> Javascript</li>
            <li>Python</li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>

        <p v-show="mostrar_email">Meu email é {{ email }}</p>
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
                textoBotao: 'Mostrar Email',
                github: "https://github.com/Jonatas00"
            }
        },
        methods: {
            showEmail() {
                this.mostrar_email = !this.mostrar_email
                if (!this.mostrar_email) {
                    this.textoBotao = 'Mostrar e-mail'
                } else {
                    this.textoBotao = 'Ocultar e-mail'
                }
            }
        }
    }
</script>