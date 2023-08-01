<template>
    <div>
        <primeiroComponente/>
        <segundoComponente/>
    </div>
</template>

<script>
    import primeiroComponente from './components/componente.vue';
    import segundoComponente from './components/teste.vue';

    export default {
        name: 'App',
        components: {
            primeiroComponente,
            segundoComponente
        }
    }
</script>