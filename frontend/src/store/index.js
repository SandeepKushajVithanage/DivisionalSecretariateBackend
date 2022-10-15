import { combineReducers, createStore } from "redux"

import authReducer from "./reducers/authReducer"

const configureStore = () => {
    const combinedReducers = combineReducers({
        auth: authReducer,
    })

    const store = createStore(combinedReducers)

    return store
}

export default configureStore