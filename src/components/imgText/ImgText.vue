<template>
  <div class="imgText">
    <my-nav title="图文分享"/>
    <div class="nav">导航栏</div>
    <div class="container">
      <div class="content">
        <img src="" alt="">
        <div>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  created () {
    
  }
}

</script>

<style scoped>
.imgText>.nav{
  border: 1px solid black;
}
.imgText>.container{
  width: 98%;
  height: 300px;
  margin: 5px auto 0;
  border: 1px solid red;
  border-radius: 4px;
  background-color: #fff;
}

</style>