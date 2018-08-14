<!-- header -->
<template>
  <div class="header">
    <el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#3A88D3"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" class="col-2 col-1">成都市人才发展中心</el-menu-item>
  <el-menu-item index="2" class="col">注册</el-menu-item>
  <el-menu-item index="3" class="col">登录</el-menu-item>
  <el-menu-item index="4" class="col col-2 col-3">进入后台管理</el-menu-item>
</el-menu>
  <el-row class="top">
    <el-col :span="4" class="col-4"><div class="grid-content bg-purple header-logo"><a href="./index.html" style="position: relative;"><img style="width:120px;" src="./logonew.png" alt=""/></a></div></el-col>
    <el-col :span="4" class="top-col col-4"><div class="grid-content bg-purple-light">成都企业</div></el-col>
    <el-col :span="4" class="top-col col-4"><div class="grid-content bg-purple">蓉漂专场</div></el-col>
    <el-col :span="4" class="top-col col-4"><div class="grid-content bg-purple-light">首页</div></el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple">登录</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">注册</div></el-col> -->
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
.header {
  .col {
    min-width: 100px;
    float: right;
    text-align: center;
  }

  .col-1 {
    text-align: right;
  }

  .col-2 {
    min-width: 200px;
  }

  .col-3 {
    text-align: left;
  }

  .top {
    background: #FAFBFF;
    min-height: 100px;
    line-height: 100px;

    .col-4:hover, .col-4:active, .active {
      background: #3A88D3;
      color: #fff;
    }

    .header-logo {
      text-align: right;
    }

    .top-col {
      float: right;
      text-align: center;
    }
  }
}
</style>
