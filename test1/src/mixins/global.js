export default {
  computed: {
    ClientHeightRate () {
      return this.$store.state.clientHeight / 1334
    },
    ClientWidthRate () {
      return this.$store.state.clientWidth / 750
    },
    Rate () {
      return this.ClientHeightRate > this.ClientWidthRate ? this.ClientWidthRate : this.ClientHeightRate
    }
  }
}
