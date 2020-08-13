<template>
  <div>
    <Button type="primary" @click="modal = true">空闲</Button>
    <Modal
    v-model="modal"
    title="请选择套餐"
    @on-ok="ok"
    @on-cancel="cancel">
      <p>套餐列表</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "RoomModal",
  data() {
    return {
      modal: false
    }
  },
  props: {
    roomlist: Array
  },
  methods: {
    ok () {
      this.$Message.info('选择套餐成功');
    },
    cancel () {
      this.$Message.info('取消套餐选择');
    }
  }
}
</script>

<style scoped>

</style>
