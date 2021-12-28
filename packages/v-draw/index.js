import vScrawl from "./src/v-draw"

// 为组件提供 install 安装方法，供按需引入
vScrawl.install = function (Vue) {
  Vue.component(vScrawl.name,vScrawl)
}
export default vScrawl
