export default {
  data () {
    return {
      startY: 0
    }
  },
  methods: {
    touchStart (e) {
      this.startY = e.changedTouches[0].pageY
    },
    touchEnd (e) {
      const moveEndY = e.changedTouches[0].pageY
      const Y = moveEndY - this.startY
      if (Y < -30) { // 手指往上滑
        this.scrollUp()
      }
    },
    scrollUp () {
      this.$router.push({name: this.routerName})
    },
    addWatchLandscape () {
      this.$store.watch( // 监听vuex属性
        (state) => state.isLandscape,
        (value) =>{
          this.watchLandscape(value)
        }
      )
    },
    watchLandscape (val) {
      const totalDom = document.querySelector(this.totalClassName)
      const partDom = document.querySelector(this.partClassName)
      if (val) {
        totalDom?.removeEventListener('touchstart', this.touchStart)
        totalDom?.removeEventListener('touchend', this.touchEnd)
        partDom?.addEventListener('touchstart', this.touchStart)
        partDom?.addEventListener('touchend', this.touchEnd)
      } else {
        partDom?.removeEventListener('touchstart', this.touchStart)
        partDom?.removeEventListener('touchend', this.touchEnd)
        totalDom?.addEventListener('touchstart', this.touchStart)
        totalDom?.addEventListener('touchend', this.touchEnd)
      }
    },
    addPcMove () {
      const vm = this
      const totalDom = document.querySelector(this.totalClassName)
      totalDom.addEventListener('mousedown', function(e) {
        vm.startY = e.clientY
        document.addEventListener('mouseup', vm.mouseUp)
      })
    },
    mouseUp (e) {
      const vm = this
      const moveEndY = e.clientY
      const Y = moveEndY - vm.startY
      if (vm.startY && Y < -30) { // 鼠标往上滑
        vm.startY = 0
        vm.scrollUp()
      }
      document.removeEventListener('mouseup', vm.mouseUp)
    }
  }
}
