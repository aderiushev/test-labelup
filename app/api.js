import request from 'superagent'

export function getPostList(type, page = 1) {
  return request('GET', '/posts').query({ type, page })
}