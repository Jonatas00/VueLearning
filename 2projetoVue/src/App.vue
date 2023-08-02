<template>
    <div>
        <componente/>
        <p>O dado do componente é: {{ testando }}</p>
        <teste/>
    </div>
</template>

<script>
    import componente from './components/componente.vue';
    import teste from './components/teste.vue';

    export default {
        name: 'App',
        components: {
            componente,
            teste
        },
        data() {
            return {
                testando: "Olha o teste"
            }
        }
    }
</script>
