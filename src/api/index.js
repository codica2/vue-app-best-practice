import request from '@/utils/request'

export default (method, path, data) => {
  return request({
    url: `/api/${path}`,
    method,
    data
  })
}
