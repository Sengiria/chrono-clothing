import React from 'react';
import SHOP_DATA from './shop.data';

const ShopItems = ({title}) => {
    const chosenShop = SHOP_DATA.find(e => e.title === title)
    return(
        <div className="shop">
        {
            chosenShop.items.map(({id, title, imageURL, price})=> (
                <div key={id}>
                    {title}
                </div>
            ))
        }
    </div>
    )
}

 
export default ShopItems;