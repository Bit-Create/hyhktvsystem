<template>
  <Modal
    v-model="$store.state.goodsmodal"
    title="请选择商品"
    @on-ok="ok"
    @on-cancel="cancel"
    width="1020px">
    <goods-tabs ref="goods"></goods-tabs>
  </Modal>
</template>

<script>
import GoodsTabs from "@/components/GoodsTabs";


export default {
  name: "GoodsModal",
  components: {GoodsTabs},
  methods: {
    ok() {
      this.$emit('ok',  this.$store.state.optgoods)
    },
    cancel() {
      this.$Message.info('取消添加商品')
    }
  }
}
</script>

<style scoped>

</style>
