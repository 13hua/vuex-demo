<!--  -->
import { mapState } from 'vuex';
<template>
<div>
  <div>this is home components</div>
  <div class="counter">
    <button @click="increment"> + </button><p>{{count}}</p><button @click="decrement"> - </button>
  </div>
</div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.counter.count;
    },
    ...mapState({
      // 箭头函数可使代码更简练
      // count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount;
      }
    })
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  }
};
</script>
<style lang='stylus' scoped>
.counter {
  p {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  button {
    width: 50px;
    text-align: center;
  }
}
</style>
