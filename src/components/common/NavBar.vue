<template>
  <div class="nav-bar">
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
      this.$router.go( -1);
    }
  },
}

</script>

<style scoped>
.nav-bar{
  padding-bottom: 3.12rem;
}
.nav-bar>.mint-header{
  position: fixed;
  height: 3.12rem;
  top: 0;
  width: 100%;
  background-color: #444;
  color: #fff;
}
</style>