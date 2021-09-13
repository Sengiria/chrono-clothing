import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { ShopContainer } from './shop-preview.styles';

const ShopPreview = ({shopArray}) => {
    const shopData = shopArray.items ? shopArray.items : shopArray
    return ( 
        <ShopContainer>
        {
        shopData.map((item) => (
            <MenuItem key={item.id} item={item} />
        ))
        }
        </ShopContainer>
     );
}
 
export default ShopPreview;