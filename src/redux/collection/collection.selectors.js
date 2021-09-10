import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCarousel = createSelector(
    [selectShop],
    (shop) => shop.carousel ? 
    Object.keys(shop.carousel).map(key => shop.carousel[key])
    :
    []
)

export const selectCurrent = createSelector(
    [selectShop],
    (shop) => shop.current
)

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections ? shop.collections : []
)

export const selectCollection = createSelector(
    [selectCollections],
    (collections) => collections ? 
    Object.keys(collections).map(key => collections[key])
    :
    []
)

