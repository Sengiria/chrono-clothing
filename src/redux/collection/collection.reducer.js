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
                    imageURL: "/shop/men/vest-with-lapels.jpg",
                    price: 55
                },{
                    id: 7,
                    title: "Black and gold vest",
                    imageURL: "/shop/men/black-n-gold-vest.jpg",
                    price: 62
                },{
                    id: 8,
                    title: "Gothic waistcoat",
                    imageURL: "/shop/men/gothic-waistcoat.jpg",
                    price: 69
                },{
                    id: 9,
                    title: "Brown jacket",
                    imageURL: "/shop/men/brown-jacket.png",
                    price: 55
                },{
                    id: 10,
                    title: "White shirt",
                    imageURL: "/shop/men/white-shirt.jpg",
                    price: 34
                },{
                    id: 11,
                    title: "Purple vest",
                    imageURL: "/shop/men/purple-vest.jpg",
                    price: 39
                }
            ]
        },{
            id: 3,
            title: "Decoration",
            path: "/decoration",
            imageURL: "/shop/decor_cropped.jpg",
            items: [
                {
                    id: 12,
                    title: "Book shelf",
                    imageURL: "/shop/decorations/book-shelf.jpg",
                    price: 34
                },{
                    id: 13,
                    title: "Clock",
                    imageURL: "/shop/decorations/clock.jpg",
                    price: 30
                },{
                    id: 14,
                    title: "Pressure Box",
                    imageURL: "/shop/decorations/pressure-box.jpg",
                    price: 32
                },,{
                    id: 15,
                    title: "Owl Statue",
                    imageURL: "/shop/decorations/owl-statue.jpg",
                    price: 26
                },{
                    id: 16,
                    title: "Wall Clock",
                    imageURL: "/shop/decorations/wall-clock.jpg",
                    price: 38
                },{
                    id: 17,
                    title: "Wood and metal valve table",
                    imageURL: "/shop/decorations/wood-and-metal-valve-table.jpg",
                    price: 41
                }
            ]
    
        },{
            id: 4,
            title: "Accessories",
            path: "/accessories",
            imageURL: "/shop/accessories_cropped.jpg",
            items: [
                {
                    id: 18,
                    title: "Black Straps Bag",
                    imageURL: "/shop/accessories/black-straps-bag.jpg",
                    price: 58
                },{
                    id: 19,
                    title: "Brown Hat",
                    imageURL: "/shop/accessories/brown-hat.jpg",
                    price: 48
                },{
                    id: 20,
                    title: "Gears Necklace",
                    imageURL: "/shop/accessories/gears-necklace.jpg",
                    price: 14
                },{
                    id: 21,
                    title: "Handwarmers",
                    imageURL: "/shop/accessories/handwarmers.jpg",
                    price: 22
                },{
                    id: 22,
                    title: "Hat with clock",
                    imageURL: "/shop/accessories/hat-with-clock.jpg",
                    price: 69
                },{
                    id: 23,
                    title: "Multi lens googles",
                    imageURL: "/shop/accessories/multi-lens-googles.jpg",
                    price: 35
                },{
                    id: 24,
                    title: "Skeleton watch",
                    imageURL: "/shop/accessories/skeleton-watch.jpg",
                    price: 37
                },
            ]
    
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