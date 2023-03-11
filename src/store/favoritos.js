import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useFavoritosStore= defineStore('favoritos', () => {
    const favoritos= ref([])

    /* Persistencia en la base de datos local para que al recargar no se borre la info */
    if (localStorage.getItem('favoritos')){
        favoritos.value= JSON.parse(localStorage.getItem('favoritos'))
    }


    const add= (poke) => {
        favoritos.value.push(poke)/* 
        Para Almacenar los datos de forma local  */
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))  
    }

    const remove = (id) => {
        favoritos.value=favoritos.value.filter(item => item.id !== id)
       /*  Para que se actualize y remueva el dato eliminado de la base de datos local   */
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))  
    }

    const findPoke = (name) => favoritos.value.find((item)=> item.name === name)    

    return{
        favoritos,
        add,
        remove,
        findPoke
    }
})
