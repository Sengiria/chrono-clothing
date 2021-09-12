import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/collection/collection.selectors';
import { firestore } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/collection/collection.actions';
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import ShopPreview from '../../components/shop-preview/shop-preview.component';

const ShopPreviewWithSpinner = WithSpinner(ShopPreview)

const Shop = ({collections, updateCollections}) => {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const collectionRef = firestore.collection('collections')

        collectionRef.get().then(
            snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                updateCollections(collectionsMap);
                setLoading(false)
            }
        )
        
    }, [])

    const {id} = useParams();
    const shop = id ? collections[id].items : Object.keys(collections).map(key => collections[key])
    console.log(shop)

    return ( 
    <div>
        {
            <ShopPreviewWithSpinner shopArray={shop} isLoading={loading}/>
        }
    </div>
 )
} 

const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
})

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) 
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Shop);