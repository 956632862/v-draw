import vScrawl from "./src/v-scrawl"

// 为组件提供 install 安装方法，供按需引入
vScrawl.install = function (Vue) {
  Vue.component(vScrawl.name,vScrawl)
}
export default vScrawl
