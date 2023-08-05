<template>
    <img :src="img" :alt="imgalt" :width="imgwidth">
    <MudarImagem @mudar-imagem="TrocarImagem" />
</template>

<script>
    import MudarImagem from './MudarImagem.vue';

    export default {
        name: 'Picture',
        components: {
            MudarImagem
        },
        data () {
            return {
                img: '/img/img01.png',
                imgalt: 'LuffyG4',
                imgwidth: '500'
            }
        },
        methods: {
            TrocarImagem() {
                if (this.img != '/img/img02.jpeg') {
                    this.img = '/img/img02.jpeg'
                } else {
                    this.img = 'img/img01.png'
                }
            }
        }
    }
</script>