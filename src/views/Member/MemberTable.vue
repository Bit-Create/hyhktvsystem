<template>
  <div>
    <Table  :columns="title" :data="members">
    </Table>
  </div>
</template>

<script>
import {getMemberMultidata} from "@/nettwork/member";

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
      ],
      members: []
    }
  },
  created() {
    getMemberMultidata().then(res => {
      console.log(res);
      this.members = res
    })
  }
}
</script>

<style scoped>

</style>