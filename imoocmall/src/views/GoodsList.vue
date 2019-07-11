<template>
  <div>这是一个商品列表
      <p>{{$route.params.goodsId}}</p>
      <br>
      <p>{{$route.params.name}}</p>
      <router-link to="/goods/title">显示商品标题</router-link>
      <router-link to="/goods/img">显示商品图片</router-link>
      <div>`
        <router-view></router-view>
      </div>
    <router-link v-bind:to="{name:'namedCart',params:{cartId:1234}}">购物车页面</router-link>
  </div>

</template>

<script>
    export default {
        name: "GoodsList",
        methods:{
          jump(){
            // this.$router.push("/cart")
            this.$router.push({path:"/cart?goodsId=123"})
          }
        }

    }
</script>

<style scoped>

</style>
