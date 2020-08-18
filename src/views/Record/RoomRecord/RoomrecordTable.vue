<template>
  <div>
    <Table  :columns="title" :data="records"  max-height="520">
    </Table>
  </div>
</template>

<script>
export default {
  name: "RoomrecordTable",
  data() {
    return {
      title: [
        {
          title: '房间号',
          key: 'roomid'
        },
        {
          title: '使用人电话',
          key: 'key'
        },
        {
          title: '开始时间',
          key: 'starttime'
        },
        {
          title: '结束时间',
          key: 'endtime'
        },
        {
          title: '应付金额',
          key: 'payable'
        },
        {
          title: '实付金额',
          key: 'pay'
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
