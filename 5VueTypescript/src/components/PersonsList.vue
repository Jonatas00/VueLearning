<script setup lang="ts">
import type { IPersonInterface } from '@/types/PersonInterface';
import type { PropType } from 'vue';

const props = defineProps({
  persons:{
    required: true,
    type: Array as PropType<IPersonInterface[]>
  }
})


</script>

<template>
  <div>
    <h2>User lists</h2>

    <ul>
      <li v-for="person in props.persons" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>  
</template>

<style scoped>

</style>