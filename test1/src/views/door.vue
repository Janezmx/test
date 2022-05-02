<template>
  <div class="original-container container">
    <div class="background5" style="position: absolute;"></div>
    <div class="left-door doors"
         :style="{width:ClientWidthRate*117+'px',                         height:ClientHeightRate*330+'px',                         left:ClientWidthRate*258+'px',bottom:ClientHeightRate*249+'px'}"></div>
    <div class="right-door doors"
         :style="{width:ClientWidthRate*118+'px',                         height:ClientHeightRate*330+'px',                         right:ClientWidthRate*257+'px',bottom:ClientHeightRate*249+'px'}"></div>
  </div>
</template>
<script type="text/ecmascript-6">

export default {
  name: "Loading",
  data() {
    return { clickState: false, clientHeight: 0, height: 0 };
  },
  mounted() {
    this.afterLoad()
    // setTimeout(() => {
    //   document.querySelector(".original-container").classList.add("opacity-1");
    //   const dom = document.querySelector(".person-div");
    //   dom.classList.add("person-div-width");
    //   dom.addEventListener("transitionend", vm.personLoaded);
    // });
  },
  methods: {
  personLoaded() {
    const mask = document.querySelector('.mask')
    mask.classList.add('loading-lost') // 遮罩层消失
    document.querySelector('.loading-logo').classList.add('loading-lost')
    mask.addEventListener('transitionend', function() {
      mask.style.display = 'none'
    })
    const dom = document.querySelector('.loading-container')
    dom.classList.add('loading-lost') // 人物消失
dom.addEventListener('transitionend', this.afterLoad)      },
    async afterLoad () { // 遮罩层和人物消失结束
    await this.$nextTick()
      const leftDoor = document.querySelector('.left-door')
      const rightDoor = document.querySelector('.right-door')
      setTimeout(() => {
        // document.querySelector('.click-tip').classList.add('loading-display')
        setTimeout(() => {
          this.addClickEvent() // 添加点击事件
          // rightDoor.classList.add('cursor-pointer')
          // leftDoor.classList.add('cursor-pointer')
        }, 1000)
      }, 800)
      rightDoor.classList.add('loading-display')
      leftDoor.classList.add('loading-display')
      document.querySelector('.background5').classList.add('no-door')
    },
    openDoor () {
    const leftDoor = document.querySelector('.left-door')
      const rightDoor = document.querySelector('.right-door')
      rightDoor.classList.add('open-right')
      leftDoor.classList.add('open-left')
      document.querySelector('.background5').classList.add('loading-lost')
      // setTimeout(() => {
      //   rightDoor.classList.remove('loading-display')
      //   leftDoor.classList.remove('loading-display')
      // }, 2000)
    },
    addClickEvent () {
    const doms = document.querySelectorAll('.doors')
      doms.forEach(dom => {
        dom.addEventListener('click', this.openDoor, false)
      })
  }
}
};</script>
<style rel="stylesheet/less" lang="less">.original-container {
   position: relative;
   perspective: 1000PX;
   width: 100%;
   height: 100%;
   background: green;
   background-size: 100% 100%;
   -webkit-transform: translate3d(0, 0, 0); // 解决ios闪屏
      /*transform-style: preserve-3d;*/    /*transition-property: transform;*/ .loading-lost {
     opacity: 0 !important;
    
  }

   .loading-display {
     opacity: 1 !important;
    
  }

   .background5 {
     opacity: 1;
     z-index: 1;
     width: 100%;
     height: 100%;
     transition: opacity 3s ease-in 1s, background 2s ease-in;
     -webkit-transition: opacity 3s ease-in 1s, background 2s ease-in;
     -webkit-transform: translate3d(0, 0, 0) // 解决ios闪屏
    
  }

   .no-door {
     background: yellow;
     background-size: 100% 100%;
     -webkit-transform: translate3d(0, 0, 0) // 解决ios闪屏
    
  }

   .doors {
     position: absolute;
     opacity: 0;
     z-index: 3;
     transform-style: preserve-3d;
     transition-property: transform;
     transition: transform 5s, opacity 2s ease-in;
     backface-visibility: hidden;
     -webkit-backface-visibility: hidden;
     -webkit-transform-style: preserve-3d;
     -webkit-transition-property: transform;
     -webkit-transition: -webkit-transform 5s, opacity 2s ease-in;
     -webkit-tap-highlight-color: transparent;
    
  }

   .right-door {
     background: url('../assets/image/right_door.png') 0 0 no-repeat;
     background-size: 100% 100%;
     transform-origin: center right;
     -webkit-transform-origin: center right;
     /*right: 36.29%;*/ 
  }

   .open-right {
     transform: translate3d(0%, 0%, -25px) rotateX(20deg) rotateY(-80deg);
     -webkit-transform: translate3d(0%, 0%, -25px) rotateX(20deg) rotateY(-80deg);
    
  }

   .left-door {
     background: url('../assets/image/left_door.png') 0 0 no-repeat;
     background-size: 100% 100%;
     transform-origin: center left;
     -webkit-transform-origin: center left;
     /*left: 36.8%;*/ 
  }

   .open-left {
     transform: translate3d(0%, 0%, -25px) rotateX(20deg) rotateY(80deg);
     -webkit-transform: translate3d(0%, 0%, -25px) rotateX(20deg) rotateY(80deg);
    
  }
}

</style>
