import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    produtos: [],
    quantidade: 2,
    preco: 19.00
}

const getters = {
    valorTotal(state) {
        return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
    }
}

const mutations = {
    adicionarProduto(state, payload) {
        state.produtos.push(payload);
    },
    setQuantidade(state, payload) {
        state.quantidade = payload;
    },
    setPreco(state, payload) {
        state.preco = payload;
    }
}

const actions = {
    adicionarProduto({ commit }, payload) {
        setTimeout(() => {
            commit('adicionarProduto', payload)
        }, 1000)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  });