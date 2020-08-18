import {request} from "@/nettwork/request";

export function getRoomList() {
  return request({
    method: 'get',
    url: '/room',
    params: {
      operation: 'select',
      type: 'all',
      data: {

      }
    }
  })
}

export function setRoomState(roomid, state) {
  return request({
    method: 'get',
    url: '/room',
    params: {
      operation: 'update',
      type: '',
      data: {
        roomid: roomid,
        state: state
      }
    }
  })
}
