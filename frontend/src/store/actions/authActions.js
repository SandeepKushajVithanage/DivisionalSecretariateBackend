import { authActionTypes } from "../reducers/authReducer"

export const setUserAction = payload => ({ type: authActionTypes.SET_USER, payload })

export const setInitialLoadingAction = payload => ({ type: authActionTypes.SET_INITIAL_LOADING, payload })

export const setAccessTokenAction = payload => ({ type: authActionTypes.SET_ACCESS_TOKEN, payload })