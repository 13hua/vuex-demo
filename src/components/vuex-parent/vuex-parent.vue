<!--  -->
<template>
  <div>
      <a href="javascript:;" @click="$store.dispatch('act_dialog')">点击</a>
      <t-dialog></t-dialog>
  </div>
</template>

<script>
import Dialog from 'components/vuex-child/vuex-child.vue';

export default {
  data() {
    return {
      // show: false
    };
  },
  components: {
    't-dialog': Dialog
  }
};
</script>
<style lang='stylus' scoped>
</style>
