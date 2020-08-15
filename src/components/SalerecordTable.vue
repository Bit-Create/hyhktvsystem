<template>
  <Table highlight-row :columns="title" :data="records">
  </Table>
</template>

<script>
export default {
  name: "SalerecordTable",
  data() {
    return {
      title: [
        {
          title: '编号',
          key: 'srid'
        },
        {
          title: '商品名称',
          key: 'goodname'
        },
        {
          title: '价格',
          key: 'price'
        },
        {
          title: '数量',
          key: 'count'
        }
      ]
    }
  },
  props: {
    records: Array
  }
}
</script>

<style scoped>

</style>
