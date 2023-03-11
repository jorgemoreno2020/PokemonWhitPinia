<script setup>
/* import TheWelcome from '../components/TheWelcome.vue' */
import {useCounterStore} from '@/store/counter.js'
import { storeToRefs } from 'pinia';

const useCounter= useCounterStore()

const {increment}= useCounter
/* Para las referencias reactivas y propiedades computadas nose puede destructurar directamente */
const {count, double} = storeToRefs(useCounter) /* Para extraer propiedades de la tienda manteniendo su reactividad, debe usar storeToRefs(). */

</script>

<template>
  <h1 :style="`color:blue`" class="mt-5">Home Counter: {{ useCounter.count }}</h1>
  <h2 :style="`color:purple`" class="mt-2">Counter Double: {{ useCounter.double }}</h2>
  <button @click="increment" class="mt-2">Increment</button>
</template>
