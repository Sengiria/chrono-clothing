import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    carousel: null,
    current: 1,
    isFetching: false,
    errorMessage: undefined
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.NEXT_SLIDE:
            return {
                ...state,
                current:
                    state.current === 3 ?
                        1
                        :
                        state.current + 1
            }
        case ShopActionTypes.PREV_SLIDE:
            return {
                ...state,
                current:
                    state.current === 1 ?
                        3
                        :
                        state.current - 1

            }
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case ShopActionTypes.UPDATE_CAROUSEL:
            return {
                ...state,
                carousel: action.payload
            }
        default:
            return state;
    }
}

export default collectionReducer;