<script setup lang="ts">
import type { IUserInterface } from '@/types/UserInterface';

const props = defineProps<{ users:IUserInterface[] }>();

const myAge = defineModel<number | string>('age');
const myName = defineModel<string>('name');

</script>

<template>
  <div>

    <input type="text" v-model="myAge">
    <input type="text" v-model="myName">

    <ul>
      <li v-for="user in props.users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>@/types/userInterface