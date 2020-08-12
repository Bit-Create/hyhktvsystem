import {request} from "@/nettwork/request";

export function getMemberMultidata() {
  return request({
    method: 'get',
    url: '/member',
    params: {
      operation: 'select',
      type: 'all',
      data: ''
    }
  })
}