<template>
  <div>
    预付款:
    <Input v-model="imprest" prefix="logo-yen" class="inputstyle" clearable></Input>
    <p style="margin-right: auto">应付款：{{payable}}</p>
    实付款:
    <Input v-model="pay" prefix="logo-yen" class="inputstyle"></Input>
    <Button type="error">结算</Button>
  </div>
</template>

<script>
import {seletetPay} from "@/nettwork/roomrecord";

export default {
  name: "Settlement",
  data() {
    return {
      imprest: null
    }
  },
  props: {
    payable: String,
    room: Object,
    pay: null
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
</style>
