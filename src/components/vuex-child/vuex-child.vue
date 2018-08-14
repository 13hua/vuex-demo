<!--  -->
import { mapState } from 'vuex';
<template>
  <div>
      <el-dialog title="提示" :visible.sync="show" width="30%" :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="$store.dispatch('act_dialog')">取 消</el-button>
          <el-button type="primary" @click="$store.dispatch('act_dialog')">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      show: state => state.dialog.show
    })
  },

  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
<style lang='stylus' scoped>
</style>
