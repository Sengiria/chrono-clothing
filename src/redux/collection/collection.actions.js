import CollectionActionTypes from './collection.types';

export const nextSlide = () => ({
    type: CollectionActionTypes.NEXT_SLIDE
})

export const prevSlide = () => ({
    type: CollectionActionTypes.PREV_SLIDE
})