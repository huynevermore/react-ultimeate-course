import { IAction } from "../types"

const initialState = {
  isCollaspe: true,
}

export const sidebarReducer = (state = initialState, { type, payload }: IAction) => {
  console.log('sidebarReducer', type, payload)
  switch (type) {
    case 'SET_COLLASPE': {
      return {
        ...state,
        isCollaspe: payload
      }
    }
    default:
      return state
  }
}