import {request} from "@/nettwork/request";

export function selectProgrammeAll() {
  return request({
    method: 'get',
    url: '/programme',
    params: {
      operation: 'select',
      type: 'all',
      data: {

      }
    }
  })
}

export function selectProramme(roomid) {
  return request({
    method: 'get',
    url: '/programme',
    params: {
      operation: 'select',
      type: 'roomid',
      data: {
        roomid: roomid
      }
    }
  })
}
