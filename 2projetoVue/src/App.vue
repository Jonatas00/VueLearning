<template>
    <div>
        <Componente />
        <p>O dado do componente é: {{ testando }}</p>
        <LifeCycle />
        <Pessoa />
    </div>
</template>

<script>
    import Componente from './components/Componente.vue';
    import Teste from './components/Teste.vue';
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoa from './components/Pessoa.vue';

    export default {
        name: 'App',
        components: {
            Componente,
            LifeCycle,
            Pessoa
        },
        data() {
            return {
                testando: "Olha o teste"
            }
        }
    }
</script>
