<template>
  <div>
    <br>
    <Input search placeholder="输入电话号码..."></Input>
    <Divider>Table</Divider>
    <member-table></member-table>
  </div>
</template>



<script>
import MemberTable from "@/views/Member/MemberTable";
export default {
  name: "Member",
  components: {MemberTable},
}
</script>

<style scoped>

</style>
