import {request} from "@/nettwork/request";

export function selectGoodsAll() {
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

export function selectGoodsType(goodtype) {
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
