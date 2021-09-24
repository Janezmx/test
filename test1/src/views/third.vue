<template>
<!--<div>{{location.href}}</div>-->
  <div>
    <div></div>
    <button @click="first">第一页</button>
  </div>
</template>

<script>
export default {
  name: "third",
  mounted () {
    console.log('third', location.href)
  },
  methods: {
    first () {
      this.$router.push({name: 'first'})
    }
  }
};
</script>

<style scoped>

</style>