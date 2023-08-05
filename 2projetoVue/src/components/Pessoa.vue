<template>
    <div>
        <h2>Essa é a descrição da pessoa: {{ nome }}</h2>
        <info :email="email" :esta_trabalhando="esta_trabalhando"/>
        <Form />
    </div>
</template>

<script>
    import Info from './Info.vue';
    import Form from './Form.vue';

    export default {
        name: 'Pessoa',
        components: { 
            Info,
            Form
        },
        data() {
            return {
                nome: 'Jonatas',
                email: 'djonatas31@gmail.com',
                esta_trabalhando: false
            }
        }
    }
</script>