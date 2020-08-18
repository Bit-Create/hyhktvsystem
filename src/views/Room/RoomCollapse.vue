<template>
  <Collapse >
    <Panel name="1">
      消费详细{{room.roomid}}
      <template slot="content">
        <Divider >结算</Divider>
        <settlement :room="room" :payable="payable"  @changestate="$emit('changestate')"></settlement>

        <Divider>套餐详细</Divider>
        <programme-table :programmes="programme"></programme-table>
        <br>

        <Divider>商品出售列表</Divider>
        <div class="Button">
          <goods-modal @ok="requestCreate" class="divstyle"></goods-modal>
          <diy-goods class="divstyle
"></diy-goods>
        </div>
        <salerecord-table :records="selerecords" @payAble="setPayAble"></salerecord-table>
      </template>
    </Panel>
  </Collapse>
</template>

<script>
import ProgrammeTable from "@/components/ProgrammeTable";
import SalerecordTable from "@/components/SalerecordTable";
import {selectProramme} from "@/nettwork/programme";
import GoodsModal from "@/components/GoodsModal";
import {createSelecord, selectSelecord} from "@/nettwork/salerecord";
import Settlement from "@/views/Room/Settlement";
import DiyGoods from "@/components/DiyGoods";

export default {
  name: "RoomCollapse",
  components: {DiyGoods, Settlement, GoodsModal, SalerecordTable, ProgrammeTable},
  data() {
    return {
      programme: [],
      selerecords: [],
      imprest: 0,
      payable: null,
      pay: null
    }
  },
  props: {
    room: Object
  },
  methods: {
    updateList() {
      this.selerecords = []
      selectSelecord(this.room.roomid).then(res => {
        let i = 1
        for (let item of res) {
          item['id'] = i++
          this.selerecords.push(item)
        }
      })
    },
    requestCreate(optgoods) {
      console.log(this.room.roomid)
      createSelecord(this.room.roomid, optgoods).then(res => {
        if (res.message == 'true') {
          this.$Message.info('选择商品成功')
          this.payable = res.payable
          this.updateList()
        } else {
          this.$Message.info('选择商品失败')
        }
      })
    },
    setPayAble(payable) {
      this.payable = payable
    }
  },
  created() {
    selectProramme(this.room.roomid).then(res => {
      this.programme = res.data
      this.payable = res.payable
      this.updateList()
    })
  }
}
</script>

<style scoped>
.Button {
  margin-bottom: 25px;
  margin-right: 10px;
  height: 30px;
  text-align: right;
}
.divstyle {
  display: inline-block;
  margin-right: 20px;
}
</style>
