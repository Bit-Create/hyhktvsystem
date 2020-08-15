<template>
  <Table  :columns="title" :data="goods">
  </Table>
</template>

<script>
export default {
  name: "GoodsTable",
  data() {
    return {
      title: [
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
  }
}
</script>

<style scoped>

</style>
