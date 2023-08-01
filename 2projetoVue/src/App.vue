<template>
    <div>
        <componente/>
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
        }
    }
</script>
