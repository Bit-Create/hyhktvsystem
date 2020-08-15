<template>
  <Table highlight-row :columns="title" :data="programmes" @on-current-change="sendProgramee">
  </Table>
</template>

<script>
export default {
  name: "ProgrammeTable",
  data() {
    return {
      title: [
        {
          title: '套餐编号',
          key: 'id'
        },
        {
          title: '套餐名',
          key: 'name'
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
          title: '价格',
          key: 'price'
        },
        {
          title: '套餐描述',
          key: 'describe'
        }
      ],
      programmeid: null
    }
  },
  props: {
    programmes: Array
  },
  methods: {
    sendProgramee(currentRow) {
      this.programmeid = currentRow.id
    }
  }
}
</script>

<style scoped>

</style>
