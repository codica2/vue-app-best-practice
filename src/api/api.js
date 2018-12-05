import request from '@/utils/request'

export function api(param1, param2) {
  return request({
    url: '/api',
    method: 'post',
    data: {
      param1,
      param2
    }
  })
}

