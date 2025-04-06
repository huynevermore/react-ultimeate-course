import { IProduct } from "../types";

export const SET_THEME = 'APP/SET_THEME';
export const SET_LOADING = 'APP/SET_LOADING';
export const SHOW_LOADING = 'APP/SHOW_LOADING';
export const HIDE_LOADING = 'APP/HIDE_LOADING';
export const ADD_PRODUCT = 'APP/ADD_PRODUCT';

export const setTheme = (theme: string) => {
  return {
    type: SET_THEME,
    payload: theme
  }
}

export const setLoading = (isLoading: boolean) => {
  return {
    type: SET_LOADING,
    payload: {
      isLoading
    }
  }
}

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  }
}

export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  }
}

export const addProduct = (payload: IProduct) => {
  return {
    type: ADD_PRODUCT,
    payload
  }
}
