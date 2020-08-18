<template>
  <div>
    <div class="inputstyle">
      <Input search
             placeholder="输入电话号码..."
             v-model="tel" @on-search="searchrecords"
             @on-change="isShow = false"></Input>
    </div>

    <div v-if="!isShow">
      <Divider>记录</Divider>
      <storagerecord-table></storagerecord-table>
    </div>

    <div v-if="isShow">
      <Divider>查询结果</Divider>
      <storagerecord-table></storagerecord-table>
    </div>

  </div>
</template>

<script>
import StoragerecordTable from "@/views/Record/StorageRecord/StoragerecordTable";
export default {
name: "StorageRecord",
  components: {StoragerecordTable},
  data() {
    return {
      tel: undefined,
      isShow: false,
      records: [],
      searchrecords: []
    }
  },
  methods: {
    // searchMembers() {
    //   selectMember(this.tel).then(res => {
    //     if (res.message == 'true') {
    //       this.searchmembers = res.data
    //       this.$Message.success('查询成功')
    //       this.isShow = !this.isShow
    //     } else {
    //       this.$Message.info('查询结果为空')
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>
.inputstyle{
  width: 20%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  display: flex;
}
</style>
