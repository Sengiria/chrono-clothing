import React from 'react';
import './cart.styles.scss';
import CustomButton from '../buttons/custom-button.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const Cart = ({cartItems, history, dispatch}) =>
( 
      <div className="cart-body">
        <div className="cart-items">
          {
            cartItems.length ?
            cartItems.map(({id, imageURL, price, title, quantity}) => (
                <div key={id} className="cart-item">
                  <img src={imageURL} alt="item" />
                  <div className="item-details">
                    <span className="name">{title}</span>
                    <span className="price">{quantity}x ${price}</span>
                  </div>
                </div>
            ))
            :
            <span className="empty-message">Your cart is empty</span>
          }
        </div>
        <CustomButton onClick={
          () => {
            history.push("/checkout")
            dispatch(toggleCartHidden())
          }

        }>CHECKOUT</CustomButton>
      </div>  
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})


export default connect(mapStateToProps)(withRouter(Cart));