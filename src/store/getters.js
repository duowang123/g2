const getters = {
  userInfo: state => state.app.userInfo,
  keyWords: state => state.app.keyWords,
  token: state => state.app.token,
  userTypeList: state => state.app.userTypeList,
  userEductionList: state => state.app.userEductionList,
  professionLevelList: state => state.app.professionLevelList,
  payTyleList: state => state.app.payTyleList,
  currbankInfo: state => state.app.currbankInfo,
  paramsInfo: state => state.app.paramsInfo,
}
export default getters