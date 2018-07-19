<!--  -->
<template>
  <div>
      <el-dialog :visible.sync="currentShow"></el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    show: {
      type: Boolean
    }
  },

  components: {},

  computed: {
    currentShow: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit('update:show', val);
      }
    }
  },

  mounted: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>
