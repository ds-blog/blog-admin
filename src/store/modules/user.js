import { login } from '@/api/user'
const state = {
  token: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const getters = {
  getUserInfo: (state, getters, rootState) => {
    return null
  },
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit, state, rootState }, userInfo) {
    const { userName, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userName: userName.trim(), password: password }).then(response => {
        const { data } = response
        console.log(response)
        commit('SET_NAME', data.userName)
        commit('SET_AVATAR', data.avatar)
        // setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
