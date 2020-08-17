<template>
  <Collapse >
    <Panel name="1">
      消费详细
      <template slot="content">
        <Divider >结算</Divider>
        <settlement :room="room" :payable="payable"></settlement>

        <Divider>套餐详细</Divider>
        <programme-table :programmes="programme"></programme-table>
        <br>

        <Divider>商品出售列表</Divider>
        <div style="text-align: right">
          <Button type="info" shape="circle" @click="$store.commit('setGoodsModal')">选择已有商品</Button>
          <goods-modal @ok="requestCreate"></goods-modal>
          <Button type="info" shape="circle">增加自定义商品</Button>
        </div>
        <salerecord-table :records="selerecords" @payAble="setPayAble"></salerecord-table>
      </template>
    </Panel>
  </Collapse>
</template>

<script>
import ProgrammeTable from "@/components/ProgrammeTable";
import SalerecordTable from "@/components/SalerecordTable";
import {getProramme} from "@/nettwork/programme";
import GoodsModal from "@/components/GoodsModal";
import {setSelecord, getSelecord} from "@/nettwork/salerecord";
import Settlement from "@/views/Room/Settlement";

export default {
  name: "RoomCollapse",
  components: {Settlement, GoodsModal, SalerecordTable, ProgrammeTable},
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
      getSelecord(this.room.roomid).then(res => {
        let i = 1
        for (let item of res) {
          item['id'] = i++
          this.selerecords.push(item)
        }
      })
    },
    requestCreate(optgoods) {
      setSelecord(this.room.roomid, optgoods).then(res => {
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
  computed: {

  },
  created() {
    getProramme(this.room.roomid).then(res => {
      this.programme = res.data
      this.payable = res.payable
      this.updateList()
    })
  }
}
</script>

<style scoped>
Button {
  margin-bottom: 25px;
  margin-right: 10px;
}
</style>
