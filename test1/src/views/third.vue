<template>
<!--<div>{{location.href}}</div>-->
  <div :style="{height:ClientHeightRate*1334+'px',width:ClientWidthRate*750+'px'}">
<!--    <video :controls="ShowConsole" src="../assets/video/conan.mp4" style="object-fit: fill" autoplay preload="auto"></video>-->
  </div>
</template>

<script>
export default {
  name: "third",
  mounted () {
    const vm = this
    const video = document.querySelector('video')
    // video.play()
    if (window.WeixinJSBridge) {
      vm.videoPlay()
    } else {
      document.addEventListener('WeixinJSBridgeReady', function(){
        vm.videoPlay()
      }, false)
    }
  },
  methods: {
    videoPlay () {
      const video = document.querySelector('video')
      // video.controls = 'controls'
      video.volumn = 0.1
      WeixinJSBridge.invoke('getNetworkType', {}, function () {
        video.play()
      })
    }
  }
};
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
}
</style>