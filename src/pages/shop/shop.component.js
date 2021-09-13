import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCollections, SelectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/collection/collection.selectors';
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import ShopPreview from '../../components/shop-preview/shop-preview.component';
import { fetchCollectionsStartAsync } from '../../redux/collection/collection.actions';
import { ShopContainer } from './shop.styles';

const ShopPreviewWithSpinner = WithSpinner(ShopPreview)

const Shop = ({collections, collection, fetchCollectionsStartAsync, isCollectionFetching, isCollectionLoaded}) => {

    useEffect(()=>{
        fetchCollectionsStartAsync()  
    }, [])

    const {id} = useParams();
    const shop = id ? collections[id] : Object.keys(collections).map(key => collections[key])
    

    return ( 
    <ShopContainer>
        {
            <ShopPreviewWithSpinner shopArray={shop} isLoading={!isCollectionLoaded}/>
        }
    </ShopContainer>
 )
} 

const mapStateToProps = createStructuredSelector ({
    collections: selectCollections,
    collection: selectCollections,
    isCollectionFetching: SelectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Shop);