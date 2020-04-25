import http from '../utils/http';

export function login(params) {
  let loginUrl = '/admin/login'
  return http.post(loginUrl, params)
}

