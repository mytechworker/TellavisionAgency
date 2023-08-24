import {GET_WRITERS_DATA, GET_WRITERS_DATA_ERROR, GET_WRITERS_DATA_SUCCESS} from "../actions/types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_WRITERS_DATA:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_WRITERS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            };
        case GET_WRITERS_DATA_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
