import { createSelector } from 'reselect'

const selectCart = state => state.cart;

// memoize selector
// memoize cartitems
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// memoize cartItems.Qty
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumQty, cartItem ) => accumQty + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumQty, cartItem ) => accumQty + cartItem.quantity * cartItem.price, 0))