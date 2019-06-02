<template>
  <div class="newsDetail">
    <my-nav title='新闻详情'/>
    <div class="container">
      <h4>{{ detail.title }}</h4>
      <div class="top">
        <p>{{ detail.addTime }}</p>
        <p>作者：{{ detail.author }}</p>
        <p>{{ detail.click }} 阅读</p>
      </div>
      <div class="content" v-html="detail.detail"></div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      detail: []
    }
  },
  created () {
    let nid = this.$route.params.nid;
    this.axios.get('/news/newsDetail',{ params:{
      nid
    }}).then( res=>{
      this.detail = res.data[0];
    })
  }
}

</script>

<style scoped>
.newsDetail>.container{
  width: 98%;
  margin: 0.31rem auto 0;
  border-radius: 0.25rem;
  background-color: #fff;
}
.newsDetail>.container>h4{
  padding: 0.62rem 0.31rem;
  box-sizing: border-box;
}
.newsDetail>.container>.top{
  display: flex;
  justify-content: space-between;
  padding: 0 0.62rem;
  border-bottom: 1px solid #eee;
}
.newsDetail>.container>.content{
  padding: 0 0.31rem;
  box-sizing: border-box;
}
</style>