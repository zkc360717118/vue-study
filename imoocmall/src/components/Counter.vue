<template>
  <div>
    <buttion @click="increment">+  </buttion>
    <buttion v-on:click="decrement"> - </buttion>
    <p>{{child_num}}</p>
  </div>

</template>
<style></style>
<script>
  export default {
    props: ["child_num"],
    data(){
      return {}
    },
    methods:{
      increment(){
        this.$emit("incre")
        // this.child_num++;
      },
      decrement(){
        this.$emit("decre")
        // this.child_num--;
      }
    }

  }
</script>
