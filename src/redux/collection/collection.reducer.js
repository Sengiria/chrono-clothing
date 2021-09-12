import CollectionActionTypes from './collection.types';

const INITIAL_STATE = {

    collections: null,
    carousel: null,
    current: 1
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CollectionActionTypes.NEXT_SLIDE:
            return {
                ...state,
                current:
                state.current === 3 ?
                1
                :
                state.current + 1     

            }
        case CollectionActionTypes.PREV_SLIDE:
            return {
                ...state,
                current:
                    state.current === 1 ?
                    3
                    :
                    state.current - 1 
                        
                        
            }
        case CollectionActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload

            }
        case CollectionActionTypes.UPDATE_CAROUSEL:
            return {
                ...state,
                carousel: action.payload

            }
        default:
            return state;
    }
}

export default collectionReducer;