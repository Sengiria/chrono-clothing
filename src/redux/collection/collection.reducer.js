import CollectionActionTypes from './collection.types';

const INITIAL_STATE = {
    shopData: [
        {
            id: 1,
            title: "Women",
            path: "/women",
            imageURL: `/shop/women_cropped.jpg`,
            items: [
                {
                    id: 1,
                    title: "Black Corset",
                    imageURL: "/shop/women/black-corset.jpg",
                    price: 55
                },{
                    id: 2,
                    title: "Brown Striped Dress",
                    imageURL: "/shop/women/brown-striped-dress.jpg",
                    price: 72
                },{
                    id: 3,
                    title: "Leather Vest",
                    imageURL: "/shop/women/leather-vest.jpg",
                    price: 69
                },{
                    id: 4,
                    title: "Beige Corset",
                    imageURL: "/shop/women/light-corset.jpg",
                    price: 98
                },{
                    id: 5,
                    title: "White Dress",
                    imageURL: "/shop/women/white-dress.jpg",
                    price: 72
                }
            ]
        },{
            id: 2,
            title: "Men",
            path: "/men",
            imageURL: "/shop/men_cropped.jpg",
            items: [
                {
                    id: 6,
                    title: "Black Corset",
                    imageURL: "",
                    price: 55.95
                },{
                    id: 7,
                    title: "Brown Striped Dress",
                    imageURL: "",
                    price: 72.99
                },{
                    id: 8,
                    title: "Leather Vest",
                    imageURL: "",
                    price: 69.99
                },{
                    id: 9,
                    title: "Beige Corset",
                    imageURL: "",
                    price: 98.75
                },{
                    id: 10,
                    title: "White Dress",
                    imageURL: "",
                    price: 72.99
                }
            ]
        },{
            id: 3,
            title: "Decoration",
            path: "/decoration",
            imageURL: "/shop/decor_cropped.jpg"
    
        },{
            id: 4,
            title: "Accessories",
            path: "/accessories",
            imageURL: "/shop/accessories_cropped.jpg"
    
        }
    ],
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