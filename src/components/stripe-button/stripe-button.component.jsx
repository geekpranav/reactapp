import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishablekey = 'pk_test_51HCcnVLQ3vJCNh8DZFOncq5Qc6afs2qVNxSXtFHBCASfPvxOYvt4MCFIAo9eYBqTwK7vgCoPJMPxQmg11EldORZN00dLVUHmYS'

    const onToken = token => {
        console.log(token)
        alert('payment sucess !')
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='expostyle clothing'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`your total is $ ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        
        />
    )
}

export default StripeCheckoutButton;