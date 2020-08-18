import {request} from "@/nettwork/request";

export function selectRoomList() {
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

export function updateRoomState(roomid, state) {
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
