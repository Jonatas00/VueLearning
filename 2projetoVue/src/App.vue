<template>
    <div>
        <Header />

        <Componente />
        <p class="pTeste">O dado do componente é: {{ testando }}</p>
        <LifeCycle />
        <Pessoa />

        <Picture />
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Componente from './components/Componente.vue';
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoa from './components/Pessoa.vue';
    import Picture from './components/Picture.vue';

    export default {
        name: 'App',
        components: {
            Header,
            Componente,
            LifeCycle,
            Pessoa,
            Picture
        },
        data() {
            return {
                testando: "Olha o teste"
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