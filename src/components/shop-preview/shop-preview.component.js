import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { ShopContainer } from './shop-preview.styles';

const ShopPreview = ({shopArray}) => {
    console.log(shopArray.map((item)=> item))
    return ( 
        <ShopContainer>
        {
        shopArray.map((item) => (
            <MenuItem key={item.id} item={item} />
        ))
        }
        </ShopContainer>
     );
}
 
export default ShopPreview;