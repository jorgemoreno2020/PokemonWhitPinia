<script setup>
import { useFavoritosStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const useFavoritos = useFavoritosStore();
/* para hacer la destructuración de una referencia reactiva usamos storeToRefs */
const { favoritos } = storeToRefs(useFavoritos); /* Favoritos es una referencia reactiva por eso usamos storeToRefs tambien se usa para las propiedades computadas */
const {remove} = useFavoritos /* para la destructuración de los metodos se usa la destructuración tipica normal  */

</script>

<template>
  <h1>Favoritos</h1>
  <p v-if="favoritos.length ===0" :style="`color:blue`">Sin Favoritos</p>
  <ul class="list-group" v-else>
    <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
      <div> {{ poke.name }} </div>
      <div>
        <RouterLink class="btn btn-sm btn-primary me-2" :to="`/pokemons/${poke.name}`"> Más Información </RouterLink>
        <button class="btn btn-sm btn-danger" @click="remove(poke.id)"> Eliminar </button>
      </div>
    </li>
  </ul>
</template>
