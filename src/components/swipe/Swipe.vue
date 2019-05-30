<template>
  <div class="swipe">
    <mt-swipe :auto="3000" :show-indicators="false"> 
      <mt-swipe-item v-for="(item,index) of list" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'Swipe',
    props: ['list'],
    data () {
      return {
      }
    },
    methods: {
      handleChange () {

      }
    },
  }
</script>

<style scoped>
.mint-swipe{
  height: 12.5rem;
}
.mint-swipe>.mint-swipe-items-wrap>.mint-swipe-item>img{
  width: 100%;
  height: 100%;
}
</style>