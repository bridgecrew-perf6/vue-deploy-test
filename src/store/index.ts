import { createStore } from "vuex";

export default createStore({
  state: {

    orderType: localStorage.getItem('orderType') || '1',
    goods: {
        grpNo: localStorage.getItem('grpNo') || '',
        goodsNo: localStorage.getItem('goodsNo') || '',
    },
  },
  getters:{
    getGoods(state: any) {
      return state.goods
  },
  getOrderType(state: any) {
      return state.orderType
  },
  },
  mutations: {

    setOrderType(state: any, params: string) {
      state.orderType = params
  }
  },
  actions: {},
  modules: {},
});
