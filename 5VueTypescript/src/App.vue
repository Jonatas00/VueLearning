<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { IPersonInterface } from '@/types/PersonInterface';
import PersonsList from './components/PersonsList.vue';

let age = ref<number | string>(20);

let persons = reactive<IPersonInterface[]>(
  [
    {
      id: 1,
      name: "Jonatas",
      age: 20
    },
    {
      id: 2,
      name: "Nathan",
      age: 13
    },
    {
      id: 3,
      name: "Paulo",
      age: 48 
    }
  ]
)

function changeAge(newAge: number |string) {
  if (age.value !== newAge) {
    age.value = newAge
  } else {
    age.value = 20
  }
}

interface IAdressInterface {
  street: string
  number: number
}

interface IDataInterface {
  name: string,
  age: number,
  adress: IAdressInterface,
  isAdult: true
}

const data: IDataInterface = {
  name: 'Jonatas',
  age: 20,
  adress: {
    street: "Rua Marilia",
    number: 21
  },
  isAdult: true
}
console.log(data);


const image = ref("TESTE.png")
</script>

<template>
  <main>
    <h2>Vue with typescript</h2>

    <p>{{ age }}</p>
    <button @click="changeAge(25)">Change age</button>

    <PersonsList :persons="persons" />

    <img :src="image" alt="">
  </main>
</template>

<style scoped>

</style>
