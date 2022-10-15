export const authActionTypes = {
    SET_USER: 'SET_USER',
    SET_INITIAL_LOADING: 'SET_INITIAL_LOADING',
    SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
}

const initialState = {
    user: null,
    loading: true,
    accessToken: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.SET_USER:
            if (action.payload === null) return initialState
            return { ...state, user: action.payload, loading: false }

        case authActionTypes.SET_INITIAL_LOADING:
            return { ...state, loading: action.payload }

        case authActionTypes.SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload, loading: false }

        default:
            return state
    }
}

export default authReducer
