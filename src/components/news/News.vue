<template>
  <div class="news">
    <NavBar :title='title'/>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <router-link :to="{name:'NewsDetail',params:{nid:item.nid}}">
          <img :src="item.img" alt="">
          <div class="right">
            <h4>{{ item.title }}</h4>
            <div>
              <p>{{ item.click }} 阅读</p>
              <p>发布时间：{{ item.addTime }}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: '新闻列表',
      list: []
    }
  },
  created () {
    this.axios.get( '/news/newsList').then( res => {
      this.list = res.data;
    })
  }
}

</script>

<style scoped>
.news>.list{
  width: 98%;
  margin: 0.31rem auto 0;
}
.news>.list>li{
  box-shadow:  0 0 0.18rem #ccc;
}
.news>.list>li>a{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  margin-top: 0.31rem;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #000;
}
.news>.list>li>a>img{
  width: 4.5rem;
  height: 4.5rem;
}
.news>.list>li>a>.right{
  width: 72%;
  height: 92%;
}
.news>.list>li>a>.right>h4{
  height: 60%;
}
.news>.list>li>a>.right>div{
  display: flex;
  justify-content: space-between;
}
</style>