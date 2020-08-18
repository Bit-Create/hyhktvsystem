import {request} from "@/nettwork/request";

export function selectMemberMultidata() {
  return request({
    method: 'get',
    url: '/member',
    params: {
      operation: 'select',
      type: 'all',
      data: {

      }
    }
  })
}

export function selectMember(tel) {
  return request({
    method: 'get',
    url: '/member',
    params: {
      operation: 'select',
      type: 'telephone',
      data: {
        telephone: tel
      }
    }
  })
}
