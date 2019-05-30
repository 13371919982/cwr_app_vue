<template>
  <div id="index">
    <!-- 轮播图 -->
    <Swipe :list='list'/>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li v-for="(item,index) in titles" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="item.route">
          <i :class="item.className"></i>
          <div class="mui-media-body">{{ item.title }}</div>
        </router-link>
      </li>
		</ul> 
  </div> 
</template>

<script>

import Swipe from '../components/swipe/Swipe'

export default {
  components: {
    Swipe
  },
  data () {
    return {
      list: [],
      titles: [
        { title: '新闻资讯', className: 'iconfont iconxinwenzixun', route: `/news/list`},
        { title: '图文分享', className: 'iconfont icontuwenfenxiang', route:{ name: 'ImgText', params:{ all: 0}}},
        { title: '商品展示', className: 'iconfont iconshangpin', route: `/products`},
        { title: '留言回馈', className: 'iconfont iconliuyanfankui', route:`/message`},
        { title: '搜索咨询', className: 'iconfont iconzixun', route: `/consult`},
        { title: '联系我们', className: 'iconfont iconlianxiwomen', route: '/contactUs'},
      ]
    }
  },
  created () {
    this.axios.get( `/index/carousel`).then( res => {
      this.list = res.data;
    })
  }
}

</script>

<style scoped>
.mui-table-view>.mui-table-view-cell>a>.iconfont{
  font-size: 1.875rem;
}
</style>