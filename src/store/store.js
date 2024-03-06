import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    produtos: [
        { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
        { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
        { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 },
    ]
};






export default new Vuex.Store({
    state,
  });





// import { createApp } from 'vue'
// import { createStore } from 'vuex'

// // Create a new store instance.
// const store = createStore({
//   state () {
//     return {
//       produtos: [
//         { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
//         { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
//         { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 },
//       ]
//     }
//   },
// //   mutations: {
// //     increment (state) {
// //       state.count++
// //     }
// //   }
// })

// const app = createApp({ /* your root component */ })

// // Install the store instance as a plugin
// app.use(store)


// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         produtos: [
//             { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
//             { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
//             { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 },
//         ]
//     },
//     getters: {
//         valorTotal(state) {
//             return state.produtos.map(p => p.quantidade * p.preco)
//                 .reduce((total, atual) => total + atual, 0);
//         }
//     }
// })


