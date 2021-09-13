import CollectionActionTypes from './collection.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const nextSlide = () => ({
    type: CollectionActionTypes.NEXT_SLIDE
})

export const prevSlide = () => ({
    type: CollectionActionTypes.PREV_SLIDE
})

export const fetchCollectionsStart = () => ({
    type: CollectionActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: CollectionActionTypes.fetchCollectionsFailure,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(
            snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionsMap))
            }).catch(e => dispatch(fetchCollectionsFailure(e.message)))
    }
}

export const updateCarousel = (carouselMap) => ({
    type: CollectionActionTypes.UPDATE_CAROUSEL,
    payload: carouselMap
})

