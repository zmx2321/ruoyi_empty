import request from '@/utils/request'

// 查询缓存详细
export function getCache() {
  return request({
    url: process.env.VUE_APP_PROX + '/monitor/cache',
    method: 'get'
  })
}
