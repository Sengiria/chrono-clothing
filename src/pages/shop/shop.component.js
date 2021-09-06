import React from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from '../../components/menu-item/menu-item.component';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';

const Shop = () => {
    const {id} = useParams();
    const filteredData = id ? SHOP_DATA.filter(category => category.title.toUpperCase() === id.toUpperCase()) : []
    const shopData = id ? filteredData[0].items : SHOP_DATA
return ( 
    <div className="shop">
        {     
            shopData.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))          
        }
    </div>
 )
} 

 
export default Shop;