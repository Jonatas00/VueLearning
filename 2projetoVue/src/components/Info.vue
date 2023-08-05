<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando no momento</p>
        <h2>Tecnologias:</h2>
        <h3>Backend:</h3>
        <ul>
            <li v-for="(technology, index) in backend_techs" v-bind:key="index">
                {{ technology }}
            </li>
        </ul>
        <h3>Frontend:</h3>
        <ul>
            <li v-for="technology in frontend_techs" :key="technology.id">
                {{ technology.language }}
            </li>
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
        props: {
            email: String,
            esta_trabalhando: Boolean
        },
        data() {
            return {
                mostrar_email: false,
                textoBotao: 'Mostrar Email',
                github: "https://github.com/Jonatas00",
                backend_techs: ['Javascript', 'PHP', 'Python'],
                frontend_techs: [
                    {id: 1, language: 'Vue'},
                    {id: 2, language: 'CSS'},
                    {id: 3, language: 'HTML'}
                ]
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