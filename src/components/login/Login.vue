<template>
  <div class="login">
    <mt-header :title="title.login">
      <div @click="goback" slot="left">
        <mt-button>{{ title.cancel }}</mt-button>
      </div>
      <mt-button slot="right">{{ title.reg }}</mt-button>
    </mt-header>
    <img src="../../assets/img/bgc.png" alt="">
    <div class="bgc"></div>
    <div class="container">
      <ul>
        <li>
          <input type="text" :placeholder='textOne' v-model="uname">
          <span v-if="uname" @click="close">x</span>
        </li>
        <li>
          <input type="text" :placeholder='textTow' maxlength="6" v-model="upwd">
          <button>获取验证码</button>
        </li>
      </ul>
      <div class="btn">
        <input type="button" value="登录" :disabled='code'>
      </div>
      <p>使用账号密码登录</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: {
        login: '登录',
        cancel: '取消',
        reg: '注册',
      },
      uname: '',
      upwd: '',
      textOne: '请输入您的手机号',
      textTow: '请输入验证码',
    }
  },
  methods: {
    goback () {
      // 根据历史纪录逐次返回
      this.$router.go( -1);
    },

    // 1.清空输入框
    close () {
      this.uname = '';
    }
  },
  computed: {
    // 非空验证
    code () { 
      return !this.uname || !this.upwd;
    }
  }
}

</script>

<style scoped>
.login>.mint-header{
  height: 3.25rem;
  width: 100%;
  background-color: #444;
  color: #fff;
}
.login>img{
  position: fixed;
  bottom: 0;
  width: 100%;
}
.login>.container{
  position: relative;
  z-index: 99;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.login>.bgc{
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 38.43rem;
  background-color: #000;
  opacity: .3;
}
.login>.container>ul{
  padding: 16.5rem 0 0;
}
.login>.container>ul>li{
  position: relative;
  z-index: 999;
  line-height: 3.75rem;
}
.login>.container>ul>li>input{
  margin: 0;
  border: none;
  border-bottom: .1rem solid #fff;
  background-color: transparent;
  color: #fff;
}
input::-webkit-input-placeholder{
  color: #fff;
}
.login>.container>ul>li>span{
  position: absolute;
  right: 1rem;
  top: .07rem;
  color: #fff;
}
.login>.container>ul>li>button{
  position: absolute;
  right: 0;
  top: 0.6rem;
  background-color: #999;
  border-radius: 2rem;
  color: #000;
}
.login>.container>.btn{
  margin: 1.5rem 0 0 0;
}
.login>.container>.btn>input{
  width: 100%;
  border-radius: 2rem;
  background-color: rgb(255, 109, 170);
  font-size: 1rem;
  line-height: 2.5rem;
  color: #fff;
}
.login>.container>.btn>input>.active{
  opacity: 0.5;
}
.login>.container>p{
  width: 100%;
  text-align: right;
  line-height: 4rem;
  color: #fff; 
}
</style>