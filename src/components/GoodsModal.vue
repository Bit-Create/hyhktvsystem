<template>
  <Modal
    v-model="modal"
    title="请选择商品"
    @on-ok="ok"
    @on-cancel="cancel"
    width="1020px">
    <goods-tabs></goods-tabs>
  </Modal>
</template>

<script>
import GoodsTabs from "@/components/GoodsTabs";
export default {
  name: "GoodsModal",
  components: {GoodsTabs},
  props: {
    modal: false
  },
  methods: {
    ok() {

    },
    cancel() {
      this.modal = false
      this.$Message.info('取消添加商品')
    }
  }
}
</script>

<style scoped>

</style>
