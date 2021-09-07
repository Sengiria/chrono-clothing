import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../../components/menu-item/menu-item.component';
import { selectShopData } from '../../redux/collection/collection.selectors';
import './shop.styles.scss';

const Shop = ({shopData}) => {
    const {id} = useParams();
    const filteredData = id ? shopData.filter(category => category.title.toUpperCase() === id.toUpperCase()) : []
    const shop = id ? filteredData[0].items : shopData

return ( 
    <div className="shop">
        {     
            shop.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))          
        }
    </div>
 )
} 

const mapStateToProps = createStructuredSelector ({
    shopData: selectShopData
})
 
export default connect(mapStateToProps, null)(Shop);