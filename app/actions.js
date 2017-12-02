import * as api from './api'

export const GET_POST_LIST = 'GET_POST_LIST'
export const GET_POST_LIST_FAIL = 'GET_POST_LIST_FAIL'
export const GET_POST_LIST_SUCCESS = 'GET_POST_LIST_SUCCESS'

export function getPostList(type, page) {
  return (dispatch, getState) => {
    dispatch({ type: GET_POST_LIST })

    api.getPostList(type, page)
    .then((response) => {
      dispatch({
        type: GET_POST_LIST_SUCCESS,
        data: {
          list: response.body.list,
          totalCount: response.body.totalCount
        }
      })
    })
    .catch(() => {
      dispatch({ type: GET_POST_LIST_FAIL })
    })
  }
}

export const SET_POST_LIST = 'SET_POST_LIST'
export function setPostList(data) {
  return {
    type: SET_POST_LIST,
    data
  }
}