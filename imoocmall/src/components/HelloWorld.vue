<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Counter v-bind:child_num="parent_num" v-on:incre="increment" v-on:decre="decrement"></Counter>
    <p>parent:{{parent_num}}</p>
  </div>
</template>

<script>
  import Counter from "./Counter"
  export default {
    name: 'HelloWorld',
    data() {
      return {
        parent_num: 10,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      Counter
    },
    methods:{
      increment(){
        this.parent_num++;
      },
      decrement(){
        this.parent_num--;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
