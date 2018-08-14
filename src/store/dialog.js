export default {
  state: {
    show: false
  },
  getter: {
    not_show(state) {
      return !state.show;
    }
  },
  mutations: {
    switch_dialog(state) {
      state.show = !state.show;
      // 你还可以在这里执行其他的操作改变state
    }
  },
  actions: {
    act_dialog(context) {
      context.commit('switch_dialog'); // 你还可以在这里触发其他的mutations方法
    }
  }
}
