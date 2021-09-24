<template>
  <div>
    <div></div>
    <button @click="next">下一页</button>
  </div>

</template>

<script>
export default {
  name: "first",
  mounted () {
    console.log('first', location.href)
  },
  methods: {
    next () {
      this.$router.push({name: 'second'})
    }
  }
};
</script>

<style scoped>

</style>