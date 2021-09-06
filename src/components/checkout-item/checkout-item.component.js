import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem, decreaseQuantity, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, addItem,  decreaseQuantity }) => {

    const { imageURL, title, quantity, price } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageURL} />
            </div>
            <span className="name">{title}</span>
            <span className="quantity">
                <div onClick={()=> decreaseQuantity(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={()=> addItem(cartItem)} className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => removeItem(cartItem)} className="remove-button">&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);