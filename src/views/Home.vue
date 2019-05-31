<template>
  <div id="home">
    <!-- 头部 -->
    <mt-header fixed title="CWR"></mt-header>
    <!-- 可变视图 -->
    <router-view />
    <!-- 底部 tabbar -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Index">
        <span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
      </mt-tab-item>
      <mt-tab-item id="Login">
        <span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
      </mt-tab-item>
      <mt-tab-item id="ShoppingCart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </mt-tab-item>
      <mt-tab-item id="Search">
        <span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
      </mt-tab-item>
    </mt-tabbar>
  </div> 
</template>

<script>

export default {
  data () {
    return {
      selected: ''
    } 
  },
  watch: {
    selected ( newV, oldV) {
      this.$router.push({ name:newV});
    }
  }
}

</script>

<style scoped>

.mint-header{
  height: 3.12rem;
  font-size: 1.2rem;
  background-color: #444;
}
.mint-header+div{
  margin: 3.12rem 0 3.75rem;
}
.mint-header>.mint-header-title{
  font-size: 1.62rem;
  color: #fff;
}
.mint-tabbar{
  position: fixed;
  bottom: 0;
}
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: #444;
  color: #fff;
}
.mint-tabbar>.mint-tab-item{
  padding: 0.87rem;
  color: #444;
}
.mint-tabbar>.mint-tab-item>.mint-tab-item-label>.mui-icon>.mui-badge{
  line-height: 1.2;
  top: 0.37rem;
  padding: 0 0.18rem;
  left: 72%;
}

</style>