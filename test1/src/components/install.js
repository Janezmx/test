/**
 *
 */


const components = {

}
export default function (Vue) {
  for (let key in components) {
    Vue.component(key, components[key])
  }
}
