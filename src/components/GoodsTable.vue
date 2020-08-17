<template>
  <div>
    <Table  :columns="title" :data="goods" @on-selection-change="selectChange">
    </Table>
  </div>
</template>

<script>
export default {
  name: "GoodsTable",
  data() {
    return {
      title: [
        {
          type: 'selection',
          width: 60,
          aligin: 'center'
        },
        {
          title: '商品编号',
          key: 'goodid'
        },
        {
          title: '商品名称',
          key: 'name'
        },
        {
          title: '商品类型',
          key: 'type'
        },
        {
          title: '价格',
          key: 'price'
        }
      ],
    }
  },
  props: {
    goods: Array
  },
  methods: {
    selectChange(selection) {
      this.$store.commit('setOptGoods', selection)
      console.log(selection)
      console.log(this.$store.state.optgoods)
    }
  }
}
</script>

<style scoped>

</style>
