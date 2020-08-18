<template>
  <div>
    <Button type="info" shape="circle" @click="modal = true">增加自定义商品</Button>
  </div>
</template>

<script>
export default {
  name: "DiyGoods",
  data() {
    return {
      modal: false
    }
  }
}
</script>

<style scoped>

</style>
