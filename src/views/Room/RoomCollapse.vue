<template>
  <Collapse >
    <Panel name="1">
      消费详细
      <template slot="content">
        <Divider>套餐详细</Divider>
        <programme-table></programme-table>
        <br>
        <Divider>商品出售列表</Divider>
        <div style="text-align: right">
          <Button type="info" shape="circle">选择已有商品</Button>
          <Button type="info" shape="circle">增加自定义商品</Button>
        </div>
        <salerecord-table></salerecord-table>
      </template>
    </Panel>
  </Collapse>
</template>

<script>
import ProgrammeTable from "@/components/ProgrammeTable";
import SalerecordTable from "@/components/SalerecordTable";
import {getProramme} from "@/nettwork/programme";

export default {
  name: "RoomCollapse",
  components: {SalerecordTable, ProgrammeTable},
  data() {
    return {
      programme: []
    }
  },
  props: {
    room: Object
  },
  created() {
    getProramme(this.room.roomid).then(res => {
      this.programme = res
    })
  }
}
</script>

<style scoped>
Button {
  margin-bottom: 20px;
  margin-right: 10px;
}
</style>
