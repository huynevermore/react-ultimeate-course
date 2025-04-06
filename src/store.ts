import { combineReducers, createStore } from "redux";
import { appReducer } from "./redux/app.reducer";
import { sidebarReducer } from "./redux/sidebar.reducer";

const rootReducers = combineReducers({
  app: appReducer,
  sidebar: sidebarReducer
})

export const store = createStore(rootReducers);

/*
store = {
  app: {
    isLoading: true,
    theme: 'light'
  },
  sidebar: {
    isCollaspe: true,
  }
}

reducers
switch(type) {
  case 'SET_THEME': {
    return {
      ...state,
      theme: payload
    }
  }
  case 'SET_LOADING': {
    return {
      ...state,
      isLoading: payload.isLoading
    }
  }
  case 'SHOW_LOADING': {
    return {
      ...state,
      isLoading: true
    }
  }
  case 'HIDE_LOADING': {
    return {
      ...state,
      isLoading: false
    }
  }
  case 'SET_COLLASPE': {
    return {
      ...state,
      isCollaspe: payload
    }
  }
  default:
    return state
}

*/