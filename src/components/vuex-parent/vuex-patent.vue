<!--  -->
<template>
  <div>
      <a href="javascript:;" @click="show=true">点击</a>
      <t-dialog :show.sync="show"></t-dialog>
  </div>
</template>

<script>
import dialog from './components/dialog.vue';

export default {
  data() {
    return {
      show: false
    };
  },

  components: {
    't-dialog': dialog
  }
};
</script>
<style lang='scss' scoped>
</style>
