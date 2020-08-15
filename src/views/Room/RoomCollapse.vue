<template>
  <Collapse >
    <Panel name="1">
      消费详细
      <template slot="content">
        <Divider>套餐详细</Divider>
        <programme-table></programme-table>
        <Divider>商品出售列表</Divider>
      </template>
    </Panel>
  </Collapse>
</template>

<script>
import ProgrammeTable from "@/components/ProgrammeTable";

export default {
  name: "RoomCollapse",
  components: {ProgrammeTable},
  created() {

  }
}
</script>

<style scoped>

</style>
