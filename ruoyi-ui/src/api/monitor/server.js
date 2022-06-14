import request from '@/utils/request'

// 查询服务器详细
export function getServer() {
  return request({
    url: process.env.VUE_APP_PROX + '/monitor/server',
    method: 'get'
  })
}
