<template>
    <Email :email="email"/>
</template>
<script>
    import Email from './Email.vue';

    export default{
       name: 'InfoEmail',
       components: {
        Email
       },
       data() {
        return {
            email: 'djonatas'
        }
       }
    }
</script>