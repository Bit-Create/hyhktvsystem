<template>
  <Table highlight-row :columns="title" :data="records">
    <template slot="add">
      <Button type="primary">-</Button>
      <Button type="primary">+</Button>
    </template>
    <template slot="delete">
      <Button type="error">删除</Button>
    </template>
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
          slot: 'add',
          key: 'count'
        },
        {
          title: '操作',
          weight: 100,
          slot: 'delete',
          align: 'center'
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
