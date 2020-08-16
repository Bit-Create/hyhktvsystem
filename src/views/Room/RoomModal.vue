<template>
  <div>
    <Button v-if="room.state == 'free'" type="success" @click="showProgrammesAll">空闲</Button>
    <Button v-else disabled ghost type="error" style="color: red">使用中</Button>
    <Modal
    v-model="modal"
    title="请选择套餐"
    @on-ok="ok"
    @on-cancel="cancel"
    width="1020px">
      <programme-table ref="pro" :programmes="programmes"></programme-table>
      <div class="right">
        电话号码：
        <Input v-model="tel" placeholder="输入电话号码..." style="width: 250px"></Input>
      </div>
    </Modal>
  </div>
</template>

<script>
import GoodsTabs from "@/components/GoodsTabs";
import ProgrammeTable from "@/components/ProgrammeTable";
import {setRoomRecord} from "@/nettwork/roomrecord";
import {setRoomState} from "@/nettwork/room";
import {getProgrammeAll} from "@/nettwork/programme";

export default {
  name: "RoomModal",
  components: {ProgrammeTable, GoodsTabs},
  data() {
    return {
      tel: null,
      programmes: [],
      modal: false
    }
  },
  props: {
    room: Object
  },
  methods: {
    ok () {
      if(this.$refs.pro.programmeid == null) {
        this.$Message.info("错误！未选择套餐")
        return
      }
      setRoomRecord(this.room.roomid, this.$refs.pro.programmeid, this.tel).then(res1 => {
        console.log(res1)
        if (res1.message == 'true') {
          setRoomState(this.room.roomid, 'using').then((res2) => {
              console.log(res2)
              if(res2.message == 'true') {
                this.room.state = 'using'
                this.$Message.info('选择套餐成功');
                return
              }
          })
        }
      })
      this.$Message.info('错误，服务器连接失败');
    },
    cancel () {
      this.$Message.info('取消套餐选择');
    },
    showProgrammesAll() {
      this.modal = true
      getProgrammeAll().then(res => {
        this.programmes = res
      })
    }
  }
}
</script>

<style scoped>

.right {
  text-align: right;
  margin-top: 10px;
}

</style>
