<template>
    <div>
        <Componente/>
        <p>O dado do componente é: {{ testando }}</p>
        <LifeCycle/>
    </div>
</template>

<script>
    import Componente from './components/Componente.vue';
    import Teste from './components/Teste.vue';
    import LifeCycle from './components/LifeCycle.vue';

    export default {
        name: 'App',
        components: {
            Componente,
            LifeCycle
        },
        data() {
            return {
                testando: "Olha o teste"
            }
        }
    }
</script>
