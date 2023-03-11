<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import {useFavoritosStore} from '@/store/favoritos'

const route = useRoute();
const router = useRouter();
const useFavoritos= useFavoritosStore();
const {add, findPoke}= useFavoritos
const { getData, data, loading, error} = useGetData();

/* const poke = ref({}); */
const back = () => {
  router.push("/pokemons");
};

/* const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    console.log(data);
    poke.value = data;
  } catch (error) {
    console.log(error);
    poke.value = null;
  }
}; */

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);


</script>

<template>
  <p v-if="loading">Cargando ...</p>
  <div class="alert alert-danger mt-2" v-if="error"> No existe el pokemon </div>
  <div v-if="data"> 
    <img :src="data.sprites?.front_default" alt="" />
    <!-- el ? nos permite que no se pinte poke sprites sino hasta que se obtengan los datos del async await de la descarga -->
    <h1>Poke name: {{ $route.params.name }}</h1>
    <!-- lo invoco como name porque asi lo llame en el index route -->
    <button :disabled="findPoke(data.name)" class="btn btn-primary mb-2" @click="add(data)">Agregar a Favoritos</button>
  </div>
  <button @click="back" class="btn btn-outline-primary">Return</button>
</template>
