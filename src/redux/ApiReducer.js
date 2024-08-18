import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './ActionType'

const initialStateValue = {
    loading: false,
    data: [],
    error: null
}

const dataReducer = (state = initialStateValue, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };
        default:
        return state;
    }
}

export default dataReducer