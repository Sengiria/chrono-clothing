import CollectionActionTypes from './collection.types';

export const nextSlide = () => ({
    type: CollectionActionTypes.NEXT_SLIDE
})

export const prevSlide = () => ({
    type: CollectionActionTypes.PREV_SLIDE
})

export const updateCollections = (collectionsMap) => ({
    type: CollectionActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})

export const updateCarousel = (carouselMap) => ({
    type: CollectionActionTypes.UPDATE_CAROUSEL,
    payload: carouselMap
})