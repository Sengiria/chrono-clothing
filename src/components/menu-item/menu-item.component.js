import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";
import './menu-item.styles.scss';

const MenuItem = ({item, history, match, addItem}) => {
    const {title, price, imageURL, path} = item
    return (
        
            <div className="menu-item" onClick={price ? null : ()=> history.push(`${match.url}${path}`)}>
                <div className="background-image" style={{backgroundImage: `url(${imageURL})`}} />
                <div className="menu-content">
                    <h1 className="menu-title">{title}</h1>
                    {
                        price ?
                        (
                            <div className="price-tag">
                            <span  className="menu-subtitle">{price}$</span>                 
                            </div>
                        )
                        :
                        (  
                            <span  className="menu-subtitle">SHOP NOW</span>
                        )
                    }
                    {
                        price ?
                        <span onClick={() => addItem(item)} className="add-to-cart">ADD TO CART</span>
                        :
                        null
                    }
                </div>
            </div>
         
    )
} 

 const mapDispatchToProps = dispatch => ({
     addItem: item => dispatch(addItem(item))
 })
 
export default connect(null, mapDispatchToProps)(withRouter(MenuItem));