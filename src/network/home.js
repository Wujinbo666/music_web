import {request} from './index'

// 首页推荐歌单的数据
export function recommendMusic(params) {
  return request({
    url:'/personalized',
    params
  })
}

