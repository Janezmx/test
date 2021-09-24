<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        // clientHeight: 568
      }
    },
    async mounted () {
      console.log('app', location.href)
      await this.$nextTick()
      document.addEventListener('visibilitychange', () => {
        const state = localStorage.getItem('visibilityState')
        localStorage.setItem('visibilityState', state+document.visibilityState)
        if (document.hidden) { // 离开微信浏览器，后台运行
          // this.videoPlay(false)
        } else {
        }
      })
    },
    methods: {
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  #app {
    font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    height: 100vh;
    min-width: 320PX;
    max-width: 750PX;
    margin: auto;
    position: relative;
  }
    body {
      margin: 0;
      background-color: #fff;
      // ios禁止微信调整大小
      -webkit-text-size-adjust: 100% !important;
      text-size-adjust: 100% !important;
      -moz-text-size-adjust: 100% !important;
      // 禁止文字选中
      -moz-user-select:none;/*火狐*/
      -webkit-user-select:none;/*webkit浏览器*/
      -ms-user-select:none;/*IE10*/
      -khtml-user-select:none;/*早期浏览器*/
      user-select:none;
      ::-webkit-scrollbar{
        width: 0;
        height: 0;
        color: transparent;
        display:none;
      }
    }
</style>

<style scoped>

  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(359deg);}
  }
</style>
