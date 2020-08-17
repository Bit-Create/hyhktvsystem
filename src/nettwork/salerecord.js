import {request} from "@/nettwork/request";

export function setSelecord(roomid, goodslist) {
  return request({
    method: 'get',
    url: '/salerecord',
    params: {
      operation: 'create',
      type: '',
      data: {
        roomid: roomid,
        goodslist: goodslist,
      }
    }
  })
}

export function getSelecord(roomid) {
  return request({
    method: 'get',
    url: '/salerecord',
    params: {
      operation: 'select',
      type: 'roomid',
      data: {
        roomid: roomid,
      }
    }
  })
}

export function updateSelecord(srid, count, mode) {
  return request({
    method: 'get',
    url: '/salerecord',
    params: {
      operation: 'update',
      type: mode,
      data: {
        srid: srid,
        count: count
      }
    }
  })
}

export function deleteSelecord(srid) {
  return request({
    method: 'get',
    url: '/salerecord',
    params: {
      operation: 'delete',
      type: 'srid',
      data: {
        srid: srid,
      }
    }
  })
}
