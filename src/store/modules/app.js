
const app = {
  state: {
    userInfo: undefined,
    keyWords: '',
    userTypeList: [], //人员类型
    userEductionList: [], //学历信息
    professionLevelList: [], // 专业等级
    payTyleList: [], // // 支付方式
    currbankInfo: undefined,
    paramsInfo: {},
    token: '',
  },
  mutations: {
    SET_KETWORDS: (state, keyWords) => {
      state.keyWords = keyWords
    },
    USER_TYPELIST: (state, val) => {
      state.userTypeList = val
    },
    USER_EDUCATION: (state, val) => {
      state.userEductionList = val
    },
    PROFESSION_LEVEL: (state, val) => {
      state.professionLevelList = val
    },
    PAY_TYPE: (state, val) => {
      state.payTyleList = val
    },
    SET_BANK: (state, val) => {
      state.currbankInfo = val
    },
    SET_PARAMS_INFO: (state, val) => {
      state.paramsInfo = val
    },
    SET_TOKEN: (state, val) => {
      state.token = val
    }
  },
  actions: {
    SET_KETWORDS: ({ commit }, keyWords) => {
      commit('SET_KETWORDS', keyWords)
    },
    USER_TYPELIST({ commit }, val) {
      commit('USER_TYPELIST', val)
    },
    USER_EDUCATION({ commit }, val) {
      commit('USER_EDUCATION', val)
    },
    PROFESSION_LEVEL({ commit }, val) {
      commit('PROFESSION_LEVEL', val)
    },
    PAY_TYPE({ commit }, val) {
      commit('PAY_TYPE', val)
    },
    SET_BANK({ commit }, val) {
      commit('SET_BANK', val)
    },
    SET_PARAMS_INFO({ commit }, val) {
      commit('SET_PARAMS_INFO', val)
    },
    SET_TOKEN({ commit }, val) {
      commit('SET_TOKEN', val)
    }
  }
}

export default app
