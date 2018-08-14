<!--  -->
<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from 'components/header/header';
import myFooter from 'components/footer/footer';

export default {
  data() {
    return {};
  },

  components: {
    myHeader,
    myFooter
  }

  // computed: {},

  // mounted: {},

  // methods: {}
};
</script>
<style lang='stylus' scoped>
</style>
