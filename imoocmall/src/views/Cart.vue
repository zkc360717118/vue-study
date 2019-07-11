<template>
    <div>这是购物车页面
      <div>{{$route.query.goodsId}}</div>
      <div>{{$route.params.cartId}}</div>
      <!--$route.params.** 获取路由之间传递的参数-->
      <!--$route.query.** 获取页面跳转传递的参数-->
    </div>
</template>

<script>
    export default {
        name: "Cart"
    }

</script>

<style scoped>

</style>
