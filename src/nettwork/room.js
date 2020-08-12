import {request} from "@/nettwork/request";

export function getRoomList() {
  return request({
    method: 'get',
    url: '/room',
    params: {
      operation: 'select',
      type: 'all',
      data: ''
    }
  })
}