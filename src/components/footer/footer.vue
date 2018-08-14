<!--  -->
<template>
  <div class="footer">
    <el-row>
      <el-col :span="18">
        <div class="grid-content bg-purple">
        <p>蜀ICP备      地址： 成都市武侯区蜀锦路59号 </p>
        <p>电话：028-61889397   下载操作手册  </p>
        <p>六合远教（成都）科技有限公司 技术支持 </p>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light footer-img"><img src="./ewm.jpg" alt=""></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }

  // components: {},

  // computed: {},

  // mounted: {},

  // methods: {}
};
</script>
<style lang='stylus' scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 3px #3d86d3 solid;
  text-align: center;

  .footer-img {
    text-align: left;
  }
}
</style>
