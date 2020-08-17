import {request} from "@/nettwork/request";

export function setRoomRecord(roomid, programmeid, tel) {
  return request({
    method: 'get',
    url: '/roomrecord',
    params: {
      operation: 'create',
      type: '',
      data: {
        roomid: roomid,
        proid: programmeid,
        tel: tel
      }
    }
  })
}

export function seletetPay(roomid) {
  return request({
    method: 'get',
    url: '/roomrecord',
    params: {
      operation: 'select',
      type: 'pay',
      data: {
        roomid: roomid
      }
    }
  })
}
