<template>
    <div>
        <Header  :esta_logado="esta_logado" />
        <Componente />
        <p class="pTeste">O dado do componente é: {{ testando }}</p>
        <LifeCycle />
        <Pessoa />
        <Vmodel />
        <Picture />
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Componente from './components/Componente.vue';
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoa from './components/Pessoa.vue';
    import Picture from './components/Picture.vue';
    import Vmodel from './components/Vmodel.vue'

    export default {
        name: 'App',
        components: {
            Header,
            Componente,
            LifeCycle,
            Pessoa,
            Picture,
            Vmodel
        },
        data() {
            return {
                testando: "Olha o teste",
                esta_logado: true
            }
        }
    }
</script>

<style>
    body {
        background-color: rgb(17, 17, 17);
        color: rgb(247, 238, 238);
    }
    a {
        color: white;
    }
    .pTeste {
        color: red;
    }
</style>