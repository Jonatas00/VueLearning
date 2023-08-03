<template>
    <img v-bind:src="img" v-bind:alt="imgalt" v-bind:width="500">
</template>

<script>
    export default {
        name: 'Picture',
        data () {
            return {
                img: '../public/img/img.jpeg',
                imgalt: 'Luffynho',
                imgwidth: '500'
            }
        }
    }
</script>