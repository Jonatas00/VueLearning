<template>
    <div>
        <Componente />
        <p>O dado do componente é: {{ testando }}</p>
        <LifeCycle />
        <Pessoa />

        <Picture />
    </div>
</template>

<script>
    import Componente from './components/Componente.vue';
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoa from './components/Pessoa.vue';
    import Picture from './components/Picture.vue';

    export default {
        name: 'App',
        components: {
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
