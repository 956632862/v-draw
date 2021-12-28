<template>
<div>
  <v-draw class="draw-container"/>
  <!--<vDraw/>-->
</div>
</template>

<script>
// import {vDraw} from "../packages/index"
export default {
  name: 'App',
  // components:{vDraw},
  mounted() {
      // console.log(vDraw)
  }
};
</script>

<style scoped>
.draw-container{
  width: 500px;
  height: 500px;
}
</style>
