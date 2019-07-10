import JWT from '../../../api/jwt'

const USER_AUTHENTICATED = (state, user) => {
  state.user = user.user
  JWT.saveToken(user.token)
}

export default {
  USER_AUTHENTICATED
}
