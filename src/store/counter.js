import {defineStore} from 'pinia'
import {computed, ref} from 'vue'

//use of the composition
export const useCounterStore= defineStore('counter', ()=>{
    const count= ref(0)

    const increment= () => count.value ++

    const double= computed(()=> count.value*2)

    return {
        count,
        increment,
        double
    }
}
)


// use of the traditional API de opciones
/* export const useCounterStore= defineStore('counter',{
    //data reactiva
    state: () =>({
        count:0
    }),
    //metodos
    actions: {
        increment(){
            this.count ++
        }
    },
    //propiedades computadas
    getters:{
        double:(state) => state.count*2
    }
}) */