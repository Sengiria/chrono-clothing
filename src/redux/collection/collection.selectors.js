import { createSelector } from "reselect";

const selectCollection = state => state.collection;

export const selectCollectionItems = createSelector(
    [selectCollection],
    (collection) => collection.collectionItems
)

export const selectCurrent = createSelector(
    [selectCollection],
    (collection) => collection.current
)