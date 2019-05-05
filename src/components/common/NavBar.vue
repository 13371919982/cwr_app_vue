<template>
  <div class="news">
    <mt-header :title="title">
      <div @click="goback" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  props: ['title'], //props属性在template中可以直接用
  data () {
    return {

    }
  },
  methods:{
    goback(){
      // 根据历史纪录逐次返回
      this.$router.go(-1);
    }
  },
  created(){
    // 在这里使用this.title
  }
}

</script>

<style scoped>
.news>.mint-header{
  background-color: #fff;
  color: #000;
}
</style>