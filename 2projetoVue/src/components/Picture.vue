<template>
    <img :src="img" :alt="imgalt" :width="500">
</template>

<script>
    export default {
        name: 'Picture',
        data () {
            return {
                img: '/img/img.jpeg',
                imgalt: 'Luffynho',
                imgwidth: '500'
            }
        }
    }
</script>