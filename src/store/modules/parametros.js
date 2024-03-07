const state = {
    quantidade: 2,
    preco: 19.00
}

const mutations = {
    setQuantidade(state, payload) {
        state.quantidade = payload;
    },
    setPreco(state, payload) {
        state.preco = payload;
    }
}

export default({
    state,
    mutations
  });