<template>
    <img :src="img" :alt="imgalt" :width="500">
</template>

<script>
    export default {
        name: 'Picture',
        data () {
            return {
                img: '/img/img01.png',
                imgalt: 'LuffyG4',
                imgwidth: '500'
            }
        }
    }
</script>