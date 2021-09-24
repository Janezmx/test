<template>
  <div>
<!--    <div>{{location.href}}</div>-->
    <button @click="next">下一页</button>
  </div>
</template>

<script>
export default {
  name: "second",
  mounted () {
    console.log('second', location.href)
  },
  methods: {
    next () {
      this.$router.push({name: 'third'})
    }
  }
};
</script>

<style scoped>

</style>