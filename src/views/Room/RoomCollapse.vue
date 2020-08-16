<template>
  <Collapse >
    <Panel name="1">
      消费详细
      <template slot="content">
        <Divider>套餐详细</Divider>
        <programme-table :programmes="programme"></programme-table>
        <br>
        <Divider>商品出售列表</Divider>
        <div style="text-align: right">
          <Button type="info" shape="circle" @click="setModal" ref="selectGoods">选择已有商品</Button>
          <goods-modal :modal="modal" @cancel="setModal"></goods-modal>
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
import GoodsModal from "@/components/GoodsModal";

export default {
  name: "RoomCollapse",
  components: {GoodsModal, SalerecordTable, ProgrammeTable},
  data() {
    return {
      programme: [],
      modal: false
    }
  },
  props: {
    room: Object
  },
  methods: {
    setModal() {
      this.modal = !this.modal
    }
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
