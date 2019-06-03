<template>
  <div class="login">
    <mt-header :title="title.login">
      <div @click="goback" slot="left">
        <mt-button>{{ title.cancel }}</mt-button>
      </div>
      <mt-button slot="right" @click="regToggle">{{ title.reg }}</mt-button>
    </mt-header>
    <img src="../../assets/img/bgc.png" alt="">
    <div class="bgc"></div>
    <div class="container">
      <ul class="ints">
        <li>
          <input type="text" :placeholder='textOne' v-model="uname">
          <span v-if="uname" @click="clearUname">x</span>
        </li>
        <li>
          <input :type="type" :placeholder='textTow' v-model="upwd">
          <span>
            <i :class="icon" @click="iconToggle"></i>
          </span>
          <button v-if="textTow==='请输入验证码'">获取验证码</button>
        </li>
      </ul>
      <div class="btn">
        <input type="button" :value="loginMethod" :disabled='code' @click="login">
      </div>
      <ul class="title">
        <li @click="toggle" v-if='loginMethod==="登录"'>{{ content }}</li>
        <li v-if="content==='使用手机号登录'&&loginMethod==='登录'">忘记密码？</li>
      </ul>
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
      loginMethod: '登录',
      content: '使用账号密码登录',
      textOne: '请输入手机号',
      textTow: '请输入验证码',
      type: 'text',
      icon: 'iconfont iconyanjing1'
    }
  },
  methods: {
    goback () {
      // 根据历史纪录逐次返回
      this.$router.go( -1);
    },

    // 1.清空输入框
    clearUname () {
      this.uname = '';
    },
    clearUpwd () {
      this.upwd = '';
    },

    // 2.切换登录
    toggle () {
      if( this.content === '使用账号密码登录'){
        this.uname = '';
        this.upwd = '';
        this.type = 'password';
        this.textOne = '请输入邮箱/手机号';
        this.textTow = '请输入密码';
        this.content = '使用手机号登录';
      }else if( this.content === '使用手机号登录'){
        this.uname = '';
        this.upwd = '';
        this.type = 'text';
        this.textOne = '请输入手机号';
        this.textTow = '请输入验证码';
        this.content = '使用账号密码登录';
      }
    },

    // 3.小眼睛切换
    iconToggle () {
      if( this.type === 'password'){
        this.type = 'text';
        this.icon = 'iconfont iconyanjing';
      }else if( this.type === 'text'){
        this.type = 'password';
        this.icon = 'iconfont iconyanjing1';
      }
    },

    // 4.右上角注册登录切换
    regToggle () {
      if( this.title.reg === '注册'){
        this.uname = '';
        this.upwd = '';
        this.title.reg = '登录'
        this.title.login = '注册';
        this.textOne = '请输入手机号';
        this.textTow = '请输入验证码';
        this.loginMethod = '注册';
      }else if( this.title.reg === '登录'){
        this.uname = '';
        this.upwd = '';
        this.title.reg = '注册'
        this.title.login = '登录';
        this.loginMethod = '登录';
      }
    },

    // 4.登录
    login () {
      
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
.login>.container>ul.ints{
  padding: 16.5rem 0 0;
}
.login>.container>ul.ints>li{
  position: relative;
  z-index: 999;
  line-height: 3.75rem;
}
.login>.container>ul.ints>li>input{
  margin: 0;
  border: none;
  border-bottom: .1rem solid #fff;
  background-color: transparent;
  color: #fff;
}
input::-webkit-input-placeholder{
  color: #fff;
}
.login>.container>ul.ints>li>span{
  position: absolute;
  right: 1rem;
  top: .07rem;
  color: #fff;
}
.login>.container>ul.ints>li>button{
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
.login>.container>ul.title{
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-top: 1.5rem;
}
.login>.container>ul.title>li{
  padding: 0 1rem;
  font-size: 0.8rem;
  color: #fff; 
}
</style>