import React from 'react';
import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HEfcYFxvbPYp2bYptXV22StjD03u76qRG245yK6bDYZICBB0llQwlfea3kWYs0jbi2tfwQnkUiUV5Eh0wIF35xM001OACLUL9'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;