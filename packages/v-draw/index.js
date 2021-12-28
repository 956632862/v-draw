import vDraw from "./src/v-draw"

// 为组件提供 install 安装方法，供按需引入
vDraw.install = function (Vue) {
  Vue.component(vDraw.name,vDraw)
}

export default vDraw
