<script setup lang="ts">
import { reactive, ref } from 'vue';
import UserList from './components/UserList.vue';
import type { IUserInterface } from '@/types/userInterface'
import { useGame } from './composables/game';

const age = ref<number>(20);
const name = ref<string>("Jonatas");

const users = reactive<IUserInterface[]>([
  {
    id: 1,
    name: 'Jonatas',
    age: 20
  },
  {
    id: 2,
    name: 'Nathan',
    age: 13
  },
  {
    id: 3,
    name: 'Juscilene',
    age: 37
  },
])

let {title, boss, brother} = useGame();

setTimeout(() => {
  title.value = 'Super Mario',
  boss.value = 'Super Bowser',
  brother.value = 'Super Luigi'
}, 2000);

</script>

<template>
  <p>{{ title }}</p>
  <p>{{ boss }}</p>
  <p>{{ brother }}</p>
  <h2>App</h2>
  <input type="text" v-model="age">
  <input type="text" v-model="name">

  <h2>UserList</h2>
  <UserList  :users="users" v-model:age="age" v-model:name="name" />
</template>

<style scoped>

</style>
