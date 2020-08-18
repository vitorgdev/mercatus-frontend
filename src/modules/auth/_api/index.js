import Api from '@/api'

const route = 'login'

const authenticate = params => {
  return new Promise(async resolve => {
    const result = await Api.post(route, params)
    resolve(result.data)
  })
}

const refreshToken = () => {
  return new Promise(async resolve => {
    const result = await Api.put(route)
    resolve(result.data)
  })
}

export default { authenticate, refreshToken }
