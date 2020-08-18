<template>
  <div>
    已付款:
    <Input v-model="imprest" prefix="logo-yen" class="inputstyle" @on-blur="updatePay"></Input>
    <p style="margin-right: auto">应付款：{{payable}}</p>
    实付款:
    <Input v-model="pay" prefix="logo-yen" class="inputstyle"></Input>
    <Button type="info">取酒</Button>
    <Button type="info">存酒</Button>
    <Button type="error" @click="offRoom" :disabled="!pay" style="margin-left: 80px">结算</Button>
  </div>
</template>

<script>
import {seletetPay, updatePay} from "@/nettwork/roomrecord";
import {setRoomState} from "@/nettwork/room";

export default {
  name: "Settlement",
  data() {
    return {
      imprest: null,
      pay: null,
      message: false
    }
  },
  props: {
    payable: String,
    room: Object,
  },
  methods: {
    offRoom() {
      updatePay(this.room.roomid, this.pay, 'checkout').then(res => {
        if(res.message == 'true') {
          setRoomState(this.room.roomid, 'free').then(res => {
            if(res.message == 'true') {
              this.$emit('changestate')
              this.$Message.success('结算成功')
            }
          })
        }
      })
    },
    updatePay(){
      updatePay(this.room.roomid, this.imprest, 'update').then(res => {
        this.message = res.message
      })
    }
  },
  created() {
    seletetPay(this.room.roomid).then(res => {
      this.imprest = res.pay
    })
  }
}
</script>

<style scoped>
div {
  font-size: 20px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
.inputstyle {
  width: 200px;
  margin-left: 20px;
}
Button {
  margin-left: 10px;
}
</style>
