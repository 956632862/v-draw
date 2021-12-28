<template>
  <div class="container">
    <!--  画板-->
    <div class="canvas-container" ref="canvasContainer">
      <canvas
          ref="draw"
          class="palette"
          :width="css.width"
          :height="css.height"
          @mousedown="handleDownCanvas"
          @mouseup="handleOverMove"
          @mousemove="handleMove"
          @mouseout="handleOverMove"
          @touchstart="handleDownCanvas"
          @touchmove="handleMove"
          @touchcancel="handleOverMove"
          @touchend="handleOverMove"
      />
    </div>
  </div>
</template>

<script>
import mixin from "./mixin.js"
export default {
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
}
</script>

<style scoped >
@import "index.css";

</style>
