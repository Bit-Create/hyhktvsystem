import {request} from "@/nettwork/request";

export function getProgrammeAll() {
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

export function getProramme(roomid) {
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
