import { IAction } from "../types"
import { ADD_PRODUCT, HIDE_LOADING, SET_LOADING, SET_THEME, SHOW_LOADING } from "./app.actions"

const initialState = {
  isLoading: true,
  theme: 'light',
  product: [
    { id: 1, name: 'laptop', status: 'new' },
    { id: 2, name: 'iphone', status: 'old' },
    { id: 3, name: 'samsung', status: 'old' }
  ]
}

export const appReducer = (state = initialState, { type, payload }: IAction) => {
  console.log('appReducer', type, payload)
  switch (type) {
    case SET_THEME: {
      return {
        ...state,
        theme: payload
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: payload.isLoading
      }
    }
    case SHOW_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HIDE_LOADING: {
      return {
        ...state,
        isLoading: false
      }
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        product: [...state.product, payload]
      }
    }
    default:
      return state
  }
}