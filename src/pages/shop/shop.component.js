import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCollections, SelectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import ShopPreview from '../../components/shop-preview/shop-preview.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ShopContainer } from './shop.styles';

const ShopPreviewWithSpinner = WithSpinner(ShopPreview)

const Shop = ({collections, collection, fetchCollectionsStart, isCollectionFetching, isCollectionLoaded}) => {

    useEffect(()=>{
        fetchCollectionsStart()  
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
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Shop);