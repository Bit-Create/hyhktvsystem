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
          <Button type="info" shape="circle" @click="$store.commit('setGoodsModal')">选择已有商品</Button>
          <goods-modal @ok="requestCreate"></goods-modal>
          <Button type="info" shape="circle">增加自定义商品</Button>
        </div>
        <salerecord-table :records="selerecords"></salerecord-table>
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

export default {
  name: "RoomCollapse",
  components: {GoodsModal, SalerecordTable, ProgrammeTable},
  data() {
    return {
      programme: [],
      selerecords: [],
    }
  },
  props: {
    room: Object
  },
  methods: {
    updateList() {
      getSelecord(this.room.roomid).then(res => {
        let i = 1
        for (let item of res) {
          item['id'] = i++
          this.selerecords.push(item)
        }
      })
    },
    requestCreate(optgoods) {
      this.$store.commit('setGoodsModal')
      setSelecord(this.room.roomid, optgoods).then(res => {
        if (res.message == 'true') {
          this.$Message.info('选择商品成功')
          this.updateList()
        } else {
          this.$Message.info('选择商品失败')
        }
      })
    }
  },
  created() {
    getProramme(this.room.roomid).then(res => {
      this.programme = res
      this.updateList()
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
