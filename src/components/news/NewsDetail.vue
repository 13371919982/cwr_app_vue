<template>
  <div class="newsDetail">
    <NavBar title='新闻详情'/>
    <div class="container">
      <h4>{{ detail.title }}</h4>
      <div class="top">
        <p>{{ detail.addTime }}</p>
        <p>作者：{{ detail.author }}</p>
        <p>{{ detail.click }} 阅读</p>
      </div>
      <!-- <div class="content" v-html="detail.detail">
        
      </div> -->
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
    this.axios.get('/news/newsDetail',{params:{
      nid:this.$route.params.nid
    }}).then(res=>{
      this.detail = res.data[0];
    })
  }
}

</script>

<style scoped>
.newsDetail>.container{
  width: 98%;
  margin: 5px auto 0;
  border-radius: 4px;
  background-color: #fff;
}
.newsDetail>.container>h4{
  padding: 10px 5px;
  box-sizing: border-box;
}
.newsDetail>.container>.top{
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
}
</style>