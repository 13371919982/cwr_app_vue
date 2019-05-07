<template>
 <div id="app">
    <!-- 顶部 -->
    <mt-header fixed title="CWR"></mt-header>
    <!-- 可变视图 -->
    <router-view />
    <!-- 底部 tabbar -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
      </mt-tab-item>
      <mt-tab-item id="Member">
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

<style>

/* 样式初始化 */
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,p,form,header,section,article,footer{margin:0;padding:0;}
em{font-style:normal;}
a{text-decoration:none;color:black;}
img{border:0;} 
ul{list-style:none;}
button,input{font-size:100%;outline:none;}
table{border-collapse:collapse;border-spacing:0;}
td,th,ul{padding:0;}

#app>.mint-header{
  height: 50px;
  background-color: #444;
}
#app>.mint-header+div{
  margin: 50px 0 60px;
}
#app>.mint-header+div
#app>.mint-header>.mint-header-title{
  font-size: 26px;
  color: #fff;
}
#app>.mint-tabbar{
  position: fixed;
  bottom: 0;
}
#app>.mint-tabbar>.mint-tab-item.is-selected{
  background-color: #444;
  color: #fff;
}
#app>.mint-tabbar>.mint-tab-item{
  padding: 14px;
  color: #444;
}
#app>.mint-tabbar>.mint-tab-item>.mint-tab-item-label>.mui-icon>.mui-badge{
  line-height: 1.2;
  top: 6px;
  padding: 0 3px;
  left: 72%;
}
</style>
