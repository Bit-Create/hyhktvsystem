<template>
  <div>
    <List  border size="large" item-layout="vertical">
      <list-item v-for="room in roomlist">
        {{ room }}
          <room-collapse></room-collapse>
        <template slot="extra">
          <room-modal></room-modal>
        </template>
      </list-item>
    </List>
  </div>
</template>

<script>
import {getRoomList} from "@/nettwork/room";
import RoomCollapse from "@/views/Room/RoomCollapse";
import RoomModal from "@/views/Room/RoomModal";

export default {
  name: "RoomList",
  components: {RoomModal, RoomCollapse},
  data() {
    return {
      roomlist: [],
      isShow: false,
      modal: false
    }
  },
  created() {
    getRoomList().then(res => {
      console.log(res);
      this.roomlist = res
    })
  }
}
</script>

<style scoped>

</style>
