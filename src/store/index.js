import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase/firebase-config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    publicacoesData: [],
    publicacoesCarregadas: null,
  },
  mutations: {
    SET_PUBLICACOES_DATA(state, payload) {
      state.publicacoesData.push(payload)
      console.log(state.publicacoesData)
    },
    PUBLICACOES_CARREGADAS(state) {
      state.publicacoesCarregadas = true
    },
  },
  actions: {
    async GET_PUBLICACOES({ commit, state }) {
      const getData = db.collection('publicacoes')
      const resultados = await getData.get()
      resultados.array.forEach(doc => {
        if (!state.publicacoesData.some(publicacao => publicacao.publicacaoId === doc.id)) {
          const data = {
            docId: doc.id,
            publicacaoId: doc.data().publicacaoId,

          }
          commit('SET_PUBLICACOES_DATA', data)
        }
      })
      commit('PUBLICACOES_CARREGADAS')
    },
  },
  modules: {},
})
