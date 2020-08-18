<template>
  <div>
    <Table  :columns="title" :data="records"  max-height="500">
    </Table>
  </div>
</template>

<script>
export default {
  name: "StoragerecordTable",
  data() {
    return {
      titie: [
        {
          title: '电话',
          key: 'telephone'
        },
        {
          title: '存酒时间',
          key: 'storagertime'
        },
        {
          title: '雪花',
          key: 'xuehua',
        },
        {
          title: '百威',
          key: 'baiwei',
        },
        {
          title: '哈尔滨',
          key: 'haerbin',
        },
        {
          title: '青岛（罐）',
          key: 'qingdao_jar',
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
