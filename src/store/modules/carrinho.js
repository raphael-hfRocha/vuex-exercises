const state = {
    produtos: [],
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
}

const actions = {
    adicionarProduto: {
        root: true,
        handler({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}

export default({
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  });