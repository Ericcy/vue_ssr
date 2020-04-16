<template>
  <div class="app">
    我是vue{{aa}}
    <div class="p">德里克</div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        aa: '啊哈哈'
      }
    }
  }
</script>
<style lang='scss' scoped>
  .app{
    color: red;
    .p{
      color: pink;
      transform: rotate(45deg);
      text-align: center;
    }
  }
</style>