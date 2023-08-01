<template>
    <div>
        <primeiroComponente/>
        <segundoComponente/>
    </div>
</template>

<script>
    import primeiroComponente from './components/primeiroComponente.vue';
import SegundoComponente from './components/segundoComponente.vue';

    export default {
        name: 'App',
        components: {
            primeiroComponente,
                SegundoComponente
        }
    }
</script>