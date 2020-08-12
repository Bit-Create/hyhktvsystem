<template>
  <div>
    <List header="Header" footer="Footer" border size="large">

    </List>
  </div>
</template>

<script>
import {getRoomList} from "@/nettwork/room";

export default {
  name: "RoomBar",
  data() {
    return {
      roomlist: []
    }
  },
  created() {
    getRoomList(res => {
      this.roomlist = res
    })
  }
}
</script>

<style scoped>

</style>