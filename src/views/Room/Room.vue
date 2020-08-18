<template >
  <div style="background-color: #f3f3f3">
    <div v-for="room in roomlist" >
      <room-card :room="room"></room-card>
    </div>
  </div>
</template>

<script>
import RoomCard from "@/views/Room/RoomCard";
import {selectRoomList} from "@/nettwork/room";

export default {
name: "Room",
  components: {RoomCard},
  data() {
    return {
      roomlist: []
    }
  },
  created() {
    console.log('room created');
    selectRoomList().then(res => {
      this.roomlist = res
    })
  }
}
</script>

<style scoped>

</style>
