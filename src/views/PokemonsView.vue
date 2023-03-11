<script setup>
/* import {ref} from 'vue' */
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { getData, data, loading, error } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <h1 :style="`color:blue`">Pokemon</h1>
  <p v-if="loading">Cargando ...</p>
  <div class="alert alert-danger mt-2" v-if="error"> No existe el Pokemon</div>
  <div v-if="data">
    <!-- Aqui garantizo que siempre que la data sea distinto de null se ejecute el codigo siguiente -->
      <ul class="list-group">
        <li v-for="pokemon in data.results" :key="pokemon.name" class="list-group-item">
          <router-link :to="`/pokemons/${pokemon.name}`">
            {{ pokemon.name }} </router-link
          >
        </li>
      </ul>
      <div class="mt-2">
        <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data.next" class="btn btn-primary " @click="getData(data.next)">Next</button>
      </div>     
    </div>
</template>
