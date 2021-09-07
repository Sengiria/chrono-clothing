import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51JX6Z9ACjDbKEmFG4zk7FNiZX413pbJVUziM09QeS3t6H675DPXbgWM032t4eu5bLqQCaekuT8RN11STEXoFOUR100LYJjFGxN"
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return ( 
        <StripeCheckout 
            label="Pay now"
            name="Chrono Clothing"
            billingAddress
            shippingAddress
            image={`${process.env.PUBLIC_URL}/chrono-clothing.png`}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}
 
export default StripeCheckoutButton;