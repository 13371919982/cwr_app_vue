<template>
  <div id="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="3000" @change="handleChange" :show-indicators="false"> 
      <mt-swipe-item v-for="(item,index) in carousel" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li v-for="(item,index) in list" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="item.route">
          <i :class="item.className"></i>
          <div class="mui-media-body">{{ item.title }}</div>
        </router-link>
      </li>
		</ul> 
  </div> 
</template>

<script>

export default {
  data () {
    return {
      carousel: [],
      list: [
        { title: '新闻资讯', className: 'iconfont iconxinwenzixun', route: { name: 'News'}},
        { title: '图文分享', className: 'iconfont icontuwenfenxiang', route:{ name: 'ImgText', params:{ all: 0}}},
        { title: '商品展示', className: 'iconfont iconshangpin', route:{ name: 'Product'}},
        { title: '留言回馈', className: 'iconfont iconliuyanfankui', route:{ name: 'Message'}},
        { title: '搜索咨询', className: 'iconfont iconzixun', route:{ name: 'Consult'}},
        { title: '联系我们', className: 'iconfont iconlianxiwomen', route:{ name: 'ContactUs'}},
      ]
    }
  },
  methods : {
    homeSwiper () {
      this.axios.get(`/index/index_carousel`).then(res => {
        this.carousel = res.data;
      })
    },
    handleChange () {}
  },
  created () {
    this.homeSwiper();
  }
}

</script>

<style scoped>
#home>.mint-swipe{
  height: 200px;
}
#home>.mint-swipe>.mint-swipe-items-wrap>.mint-swipe-item>img{
  width: 100%;
  height: 100%;
}
#home>.mui-table-view>.mui-table-view-cell>a>.iconfont{
  font-size: 30px;
}
</style>