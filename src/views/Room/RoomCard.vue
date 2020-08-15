<template>
  <div class="divstyle">
    <card style="font-size: 20px" >
      房间号：{{room.roomid}}
      <div>房间大小：{{room.type}}</div>
      <room-modal :modal="modal" :room="room" style="text-align: right"></room-modal>
    </card>
    <room-collapse v-if="room.state == 'using'"></room-collapse>
  </div>
</template>

<script>
import RoomCollapse from "@/views/Room/RoomCollapse";
import RoomModal from "@/views/Room/RoomModal";

export default {
  name: "RoomCard",
  components: {RoomModal, RoomCollapse},
  data() {
    return {
      modal: false,
    }
  },
  props:{
    room: Object
  }
}
</script>

<style scoped>
.divstyle {
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}
</style>
