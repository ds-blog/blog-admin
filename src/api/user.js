import http from '../utils/http'

export function login(params) {
  const loginUrl = '/admin/login'
  return http.post(loginUrl, params)
}

export function logout(params) {
  const logoutUrl = '/admin/logout'
  return http.post(logoutUrl, params)
}
