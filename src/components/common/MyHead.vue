<template>
  <div class="head-bar">
    <mt-header :title="title.login">
      <div @click="goback" slot="left">
        <mt-button>{{ title.cancel }}</mt-button>
      </div>
      <mt-button slot="right">{{ title.reg }}</mt-button>
    </mt-header>
  </div>
</template>

<script>

export default {
  name: 'HeadBar',
  props: {
    title: {
      type: Object,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
    goback () {
      // 根据历史纪录逐次返回
      this.$router.go( -1);
    }
  },
}

</script>

<style scoped>
.head-bar{
  padding-bottom: 3.25rem;
}
.head-bar>.mint-header{
  position: fixed;
  height: 3.25rem;
  top: 0;
  width: 100%;
  background-color: #444;
  color: #fff;
}
</style>