<template>
<div>
  <vdrwa/>
</div>
</template>

<script>
import vdrwa from "../packages/v-draw"
export default {
  name: 'App',
  components:{vdrwa},
  mounted() {
  }
};
</script>

<style scoped>
.draw-container{
  width: 500px;
  height: 500px;
}
</style>
