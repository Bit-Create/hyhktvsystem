<template>
  <div>
    <div class="inputstyle">
      <Input search
             placeholder="输入电话号码..."
             v-model="tel" @on-search="searchMembers"
             @on-change="isShow = false"></Input>
      <Button type="primary" style="margin-left: 10px">存酒</Button>
    </div>

    <div v-if="!isShow">
      <Divider>table</Divider>
      <member-table :members="members"></member-table>
    </div>

    <div v-if="isShow">
      <Divider>查询结果</Divider>
      <member-table :members="searchmembers"></member-table>
    </div>

  </div>
</template>

<script>
import MemberTable from "@/views/Member/MemberTable";
import {getMemberMultidata, getMember} from "@/nettwork/member";
export default {
  name: "Member",
  components: {MemberTable},
  data() {
    return {
      tel: undefined,
      isShow: false,
      members: [],
      searchmembers: []
      }
  },
  methods: {
    searchMembers() {
      getMember(this.tel).then(res => {
        if(res.message == 'true') {
          this.searchmembers = res.data
          this.$Message.info('查询成功')
          this.isShow = !this.isShow
        } else {
          this.$Message.info('查询结果为空')
        }
      })
    }
  },
  created() {
    getMemberMultidata().then(res => {
      console.log(res)
      this.members = res
    })
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
