import { STATUS_NOT_LOADED, STATUS_LOADING, STATUS_LOADED } from './constants/common'
import {
  GET_POST_LIST,
  GET_POST_LIST_FAIL,
  GET_POST_LIST_SUCCESS,
  SET_POST_LIST
} from './actions'

const initialState = {
  data: {
    list: []
  },
  meta: {
    status: STATUS_NOT_LOADED
  }
}

export function post (state = initialState, action = {}) {
  switch (action.type) {
    case GET_POST_LIST:
      return {
        ...state,
        meta: {
          ...state.meta,
          status: STATUS_LOADING
        }
      }
    case GET_POST_LIST_FAIL:
      return {
        ...state,
        meta: {
          ...state.meta,
          status: STATUS_NOT_LOADED
        }
      }
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data,
          list: [
            ...state.data.list,
            ...action.data.list
          ]
        },
        meta: {
          ...state.meta,
          status: STATUS_LOADED
        }
      }
    case SET_POST_LIST:
      return {
        ...state,
        data: {
          ...state.data,
          list: action.data
        }
      }
    default:
      return state
  }
}