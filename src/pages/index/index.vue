<!--  -->
<template>
  <div>
    <div class="tab-demo">
      <button v-for="(tab,index) in tabs" :key="index" :class="['tab-button',{active:currentTab === tab}]" @click="currentTab=tab">{{tab}}</button>
      <component :is="currentTabComponent" class="tab"></component>
    </div>
  </div>
</template>

<script>
import tabArchive from 'pages/tab-archive/tab-archive';
import tabHome from 'pages/tab-home/tab-home';
import tabPosts from 'pages/tab-posts/tab-posts';

export default {
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    };
  },

  components: {
    tabArchive,
    tabHome,
    tabPosts
  },

  computed: {
    currentTabComponent() {
      return 'tab' + this.currentTab;
    }
  }
};
</script>
<style lang='stylus' scoped>
.tab-demo {
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
    &:hover {
      background: #e0e0e0;
    }
    &.active {
      background: #e0e0e0;
    }
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
}
</style>
