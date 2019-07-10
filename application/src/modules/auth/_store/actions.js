import api from '../_api'

const authenticate = async ({ commit }, params) => {
  const response = await api.authenticate(params)
  commit('USER_AUTHENTICATED', response)
}

const refreshToken = async ({ commit }) => {
  const response = await api.refreshToken()
  console.log(response)

  // commit('USER_AUTHENTICATED', response)
}

export default {
  authenticate,
  refreshToken
}
