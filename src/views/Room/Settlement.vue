<template>
  <div>
    已付款:
    <Input v-model="imprest" prefix="logo-yen" class="inputstyle" @on-clear="updatePay(imprest)"></Input>
    <p style="margin-right: auto">应付款：{{payable}}</p>
    需付款:
    <Input v-model="pay" prefix="logo-yen" class="inputstyle"></Input>
    <Button type="info" @click="offRoom">取酒</Button>
    <Button type="info" @click="offRoom">存酒</Button>
    <Button type="error" @click="offRoom" :disabled="!pay" style="margin-left: 80px">结算</Button>
  </div>
</template>

<script>
import {seletetPay, updatePay} from "@/nettwork/roomrecord";

export default {
  name: "Settlement",
  data() {
    return {
      imprest: null,
      pay: null
    }
  },
  props: {
    payable: String,
    room: Object,
  },
  methods: {
    offRoom() {

    },
    updatePay(pay){
      updatePay(this.room.roomid, pay).then(res => {

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
