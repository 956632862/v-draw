(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vdraw"] = factory();
	else
		root["vdraw"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "7838":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8d6e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_v_draw_vue_vue_type_style_index_0_id_6f033364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7838");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_v_draw_vue_vue_type_style_index_0_id_6f033364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_v_draw_vue_vue_type_style_index_0_id_6f033364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"691abc85-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/v-draw/src/v-draw.vue?vue&type=template&id=6f033364&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{ref:"canvasContainer",staticClass:"canvas-container"},[_c('canvas',{ref:"draw",staticClass:"palette",attrs:{"width":_vm.css.width,"height":_vm.css.height},on:{"mousedown":_vm.handleDownCanvas,"mouseup":_vm.handleOverMove,"mousemove":_vm.handleMove,"mouseout":_vm.handleOverMove,"touchstart":_vm.handleDownCanvas,"touchmove":_vm.handleMove,"touchcancel":_vm.handleOverMove,"touchend":_vm.handleOverMove}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/v-draw/src/v-draw.vue?vue&type=template&id=6f033364&scoped=true&

// CONCATENATED MODULE: ./packages/v-draw/src/mixin.js
/* harmony default export */ var mixin = ({
    // 将其他常用的配置全部放到这里
    data() {
        return {
            css: {
                width: 500,
                height: 500
            },
            // 画笔的设置
            config: {
                lineWidth: 1,              //  线条的宽度
                shadowBlur: 1,             //  阴影模糊的程度
                shadowColor: "#f1d506",    //  阴影的颜色
                strokeStyle: "#f1d506"     //  笔触的颜色
            },
            // canvas对象
            context: {},
            // 保存绘画的路径
            lines: [],
            // 保存按下了上一步之后，储存下来的路线的数据
            saveLines: [],
            // 是否开始绘制
            canvasMoveUse: false,
            preHandle: [],   // 上一步
            nextHandle: [],   // 下一步
            image: null,
        }
    },
    methods: {
        // 判断是否是pc
        isPC() {
            this.flag = navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            );
            return this.flag === null
        },
        // 获取当前元素按下的坐标client是基于整个页面的坐标  offset是canvas距离顶部以及左边的距离
        getEventXY(e) {
            // 默认获取pc
            let canvasX = e.offsetX
            let canvasY = e.offsetY
            // this.movex = canvasX
            // this.movey = canvasY
            // 使用手机的时候
            if (!this.isPC()) {
                const { x, y } = e.target.getBoundingClientRect()
                canvasY = e.changedTouches[0].clientY - y
                canvasX = e.changedTouches[0].clientX - x
            }
            return { canvasX, canvasY }
        },
        // 删除路径里面的数据
        deleteLines(preKey) {
            // 查找当前preKey在记录中哪里开始
            const linesKey = this.lines.findIndex(n => n && n.preKey === preKey)
            // 将路径参数添加到对应的nextHandle的数组中
            const nextArrIndex = this.nextHandle.findIndex(n => n && n.preKey === preKey)
            if (linesKey === -1) return false
            let i = linesKey
            let saveData = []
            // 删除当前位置到下一次遇到PreKey
            for (i; i < this.lines.length; i++) {
                if (!this.lines[i]) {
                    saveData.push(null)
                    continue
                }
                let flag = this.lines[i] !== null &&
                    this.lines[i].preKey !== void (0) &&
                    this.lines[i].preKey !== preKey
                // 找到下一次的preKey就结束
                if (flag) break;
                saveData.push(this.lines[i])
            }

            this.$nextTick(() => {
                // 删除
                this.lines.splice(linesKey, i)
                // 添加绘制路径到下一步
                this.nextHandle[nextArrIndex].lines = saveData
            })
        },
    }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/v-draw/src/v-draw.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var v_drawvue_type_script_lang_js_ = ({
  name: "v-draw",
  mixins:[ mixin ],
  props:{
    backgroundColor:{
      type:String,
      default:()=>'beige'
    }
  },
  watch:{
    backgroundColor(n){
      this.setBgColor(n)
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init(){
      const canvas = this.$refs.draw
      const canvas_box = this.$refs.canvasContainer
      this.context = canvas.getContext("2d")

      // 设置画布的宽高根据外层自动缩放
      this.$nextTick(()=>{
        this.css.width = canvas_box.clientWidth
        this.css.height = canvas_box.clientHeight
      })

      setTimeout(()=>{
        this.setBgColor()
      },0)
    },

    // 设置背景颜色
    setBgColor(color = this.backgroundColor)
    {
      const canvas = this.$refs.draw
      this.context.fillStyle = color
      this.context.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)
      this.resetLine()
    },

    // 清空画布
    clearCanvas()
    {
      const { clientWidth,clientHeight } = this.$refs.draw
      this.context.clearRect(0,0,clientWidth,clientHeight);
      this.lines = []
      this.nextHandle = []
      this.preHandle = []
      this.saveLines = []
      // 保留背景颜色
      this.setBgColor()
    },

    // 结束绘画
    handleOverMove()
    {
      this.canvasMoveUse = false
      this.$emit("drawEnd")
      // 往记录中添加短点
      this.lines.push(null)
    },

    // 生成图片
    createImage()
    {
      this.image = this.$refs.draw.toDataURL("image/png",1)
      this.$emit("createImgCallback",this.image)
    },

    // 选择图片设置
    handleSetImg(url = null)
    {
      if (url){
        this.putOnlineImagToCanvas(url)
        return false
      }
      let input = document.createElement("input")
      input.type = 'file'
      input.accept = 'image/*'
      input.onchange = this.putImageToCanvas
      input.click()
    },

    // 将网络图片更新到画布上
    putOnlineImagToCanvas(url)
    {
      const image = new Image();
      image.src = url
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = () => {
        // 获取canvas的宽高
        const  { clientWidth,clientHeight } = this.$refs.draw
        // 绘制之前还是需要将当前页面添加到上一步
        this.preHandle.push(this.context.getImageData(0, 0, clientWidth, clientHeight))
        // 这里没办法解决画图被覆盖的问题，只能绘制完图片之后将线条绘制回去
        this.context.drawImage(image,0,0,clientWidth,clientHeight)
        this.resetLine()
        // 绘制到背景上之后添加到回调
        this.$emit("setImgCallback")
      }
    },

    putImageToCanvas(event)
    {
      const e = event.target;
      const { files } = e; // 拿到所有的文件
      // eslint-disable-next-line prefer-destructuring
      const file = files[0]

      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        let imag = new Image();
        imag.src = reader.result
        imag.setAttribute("crossOrigin", "anonymous");
        imag.onload = () =>{
          // 获取canvas的宽高
          const  { clientWidth,clientHeight } = this.$refs.draw
          // 绘制之前还是需要将当前页面添加到上一步
          this.preHandle.push(this.context.getImageData(0, 0, clientWidth, clientHeight))
          // 这里没办法解决画图被覆盖的问题，只能绘制完图片之后将线条绘制回去
          this.context.drawImage(imag,0,0,clientWidth,clientHeight)
          this.resetLine()
          // 绘制到背景上之后添加到回调
          this.$emit("setImgCallback")
        }
      }
    },

    // 重新绘制之前绘画
    resetLine()
    {
      this.context.beginPath();
      // 这里是将绘制的记录返回回来，但是这里返回之后，就没法再进行上下了
      this.lines.forEach((item,index) => {
        // item === null 代表着抬起手指，断开绘制
        if (item){
          const next_item = this.lines[index+1] ||  item
          this.context.moveTo(item.x,item.y);
          this.context.lineTo(next_item.x,next_item.y);
          this.context.strokeStyle=item.strokeStyle;
          this.context.shadowColor=item.shadowColor
          this.context.stroke();
        }else{
          // 清除子路径
          this.context.beginPath();
        }
      })
    },

    // 上一步
    handlePre()
    {
      if(!this.preHandle.length) return false
      const preKey =  this.preHandle.length - 1
      const pre =  this.preHandle.pop()
      // 这里应该是把当前的canvas保存进下一步
      const  { clientWidth,clientHeight } = this.$refs.draw
      const next = this.context.getImageData(0, 0, clientWidth, clientHeight)
      // 修改结构为 当前的key,跟数据
      const nextData = { preKey,data:next,lines:[] }
      this.nextHandle.push(nextData)
      // 删除对应的绘制路径
      this.deleteLines(preKey)
      this.context.putImageData(pre,0, 0)
    },

    // 下一步
    handleNext()
    {
      if(!this.nextHandle.length) return false
      const next = this.nextHandle.pop()
      // 这里应该是把当前的canvas保存进下一步
      const  { clientWidth,clientHeight } = this.$refs.draw
      const pre = this.context.getImageData(0, 0, clientWidth, clientHeight)
      this.preHandle.push(pre)
      this.context.putImageData(next.data,0, 0)
      // 将路径数据返回到lines里面
      next.lines.forEach((item) => {
        this.lines.push(item)
      })
    },

    // 设置画笔配置
    setWriteConfig({ shadowColor = this.config.shadowColor,strokeStyle = this.config.strokeStyle,lineWidth = this.config.lineWidth,shadowBlur = this.config.shadowBlur })
    {
      this.config.shadowColor = shadowColor
      this.config.strokeStyle = strokeStyle
      this.config.lineWidth = lineWidth
      this.config.shadowBlur = shadowBlur
      this.handleSetConfig()
    },

    // 设置画笔的配置
    handleSetConfig()
    {
      this.context.lineWidth = this.config.lineWidth
      this.context.shadowBlur = this.config.shadowBlur
      this.context.shadowColor = this.config.shadowColor
      this.context.strokeStyle = this.config.strokeStyle
    },

    // 在canvas中按下鼠标
    handleDownCanvas(e)
    {
      e.preventDefault();
      // 触发开始移动函数
      this.$emit('drawStart')
      this.canvasMoveUse = true
      // 获取当前鼠标按下的位置
      const { canvasX,canvasY } = this.getEventXY(e)
      // 重置画笔配置
      this.handleSetConfig()
      //清除子路径
      this.context.beginPath()
      this.context.moveTo(canvasX, canvasY)
      // 参数的值 x y width height
      const  { clientWidth,clientHeight } = this.$refs.draw
      const pre = this.context.getImageData(0, 0, clientWidth, clientHeight)
      // 记录当前操作，便于后续的撤销操作
      this.preHandle.push(pre)
      this.nextHandle = []
      // 添加到上一步操作的最后一步就是当前的key
      const preKey = this.preHandle.length - 1

      // 按下就保存路径位置
      this.lines.push({
        preKey,
        x:canvasX,
        y:canvasY,
        strokeStyle:this.context.strokeStyle,
        shadowColor:this.context.shadowColor
      })
    },

    // 移动
    handleMove(e)
    {
      e.preventDefault();
      this.$emit("drawing")
      if (!this.canvasMoveUse) return
      // 获取坐标点
      const { canvasX,canvasY } = this.getEventXY(e)
      // 链接每个点
      this.context.lineTo( canvasX ,canvasY)
      // 按下就保存路径位置
      this.lines.push({
        x:canvasX,
        y:canvasY,
        strokeStyle:this.context.strokeStyle,
        shadowColor:this.context.shadowColor
      })
      //绘制已定义的路径
      this.context.stroke()
    }
  }
});

// CONCATENATED MODULE: ./packages/v-draw/src/v-draw.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_v_drawvue_type_script_lang_js_ = (v_drawvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/v-draw/src/v-draw.vue?vue&type=style&index=0&id=6f033364&scoped=true&lang=css&
var v_drawvue_type_style_index_0_id_6f033364_scoped_true_lang_css_ = __webpack_require__("8d6e");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/v-draw/src/v-draw.vue






/* normalize component */

var component = normalizeComponent(
  src_v_drawvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6f033364",
  null
  
)

/* harmony default export */ var v_draw = (component.exports);
// CONCATENATED MODULE: ./packages/index.js


const components = [
  v_draw
]

const install = function (Vue)  {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  install,
  vDraw: v_draw
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vdraw.umd.js.map