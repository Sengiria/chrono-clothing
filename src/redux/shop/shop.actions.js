import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const nextSlide = () => ({
    type: ShopActionTypes.NEXT_SLIDE
})

export const prevSlide = () => ({
    type: ShopActionTypes.PREV_SLIDE
})

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.fetchCollectionsFailure,
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
    type: ShopActionTypes.UPDATE_CAROUSEL,
    payload: carouselMap
})

