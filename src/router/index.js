import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /* linkActiveClass: "active", */  /* Alternativa para dejar las clases activas de manera global sin usar active-class="active". */
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:name',  /* A este :name lo podre invocar desde poke view */
      name: 'pokemon',
      component: () => import('../views/Pokeview.vue')
    },
    {
      path: '/favoritos',  /* A este :name lo podre invocar desde poke view */
      name: 'favoritos',
      component: () => import('../views/FavouritesView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue")
   },
  ]
})

export default router
