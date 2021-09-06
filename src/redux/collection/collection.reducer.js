import CollectionActionTypes from './collection.types';

const INITIAL_STATE = {
    collectionItems: [
        {
            id: 1,
            title: "Style",
            desc: "Steampunk is nostalgia for what never was",
            imageUrl: `/carousel/1.jpg`,
        },
        {
            id: 2,
            title: "Innovation",
            desc: "If at first an idea isn't absurd, there is no hope for it",
            imageUrl: `/carousel/2.jpg`,
        },
        {
            id: 3,
            title: "Recycle",
            desc: "Most of us have gears we never use",
            imageUrl: "/carousel/3.jpg",
        }

    ],
    current: 1
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CollectionActionTypes.NEXT_SLIDE:
            return {
                ...state,
                current: 
                state.current === state.collectionItems.length ?
                1
                :
                state.current + 1
            }
        case CollectionActionTypes.PREV_SLIDE:
            return {
                ...state,
                current: 
                state.current === 1 ?
                1
                :
                state.collectionItems.length
            }
        default:
            return state;
    }
}

export default collectionReducer;