<template>
  <div>
    <Table  :columns="title" :data="records"  max-height="520">
    </Table>
  </div>
</template>

<script>
export default {
  name: "StoragerecordTable",
  data() {
    return {
      title: [
        {
          title: '电话',
          key: 'telephone'
        },
        {
          title: '存取时间',
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
        },
        {
          title: '操作',
          key: 'access',
          filters: [
            {
              label: '存',
              value: 'save'
            },
            {
              label: '取',
              value: 'take'
            },
          ],
          filterMultiple: false,
          fiflerMethod (value, row) {
            if (value == 'save') {
              return row.access == '存'
            } else if (value == 'take') {
              return row.access == '取'
            }
          }
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
