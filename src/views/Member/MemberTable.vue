<template>
  <div>
    <Table  :columns="title" :data="members">
    </Table>
  </div>
</template>

<script>

export default {
  name: "MemberTable",
  data() {
    return {
      title: [
        {
          title: '电话',
          key: 'telephone'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex',
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
    members: Array
  }
}
</script>

<style scoped>

</style>
