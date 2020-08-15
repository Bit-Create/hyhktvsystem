import {request} from "@/nettwork/request";

export function getGoodsAll() {
  return request({
    method: 'get',
    url: '/goods',
    params: {
      operation: 'select',
      type: 'all',
      data: {

      }
    }
  })
}

export function getGoodsType(goodtype) {
  return request({
    method: 'get',
    url: '/goods',
    params: {
      operation: 'select',
      type: 'type',
      data: {
        goodtype,
      }
    }
  })
}
