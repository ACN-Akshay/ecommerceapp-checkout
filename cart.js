// Function to add an item to a shopping cart with quantity tracking
function addToCart(cart, item) {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
        // If it exists, increment the quantity
        cart[existingItemIndex].quantity += 1;
    }
    else {
        // If it doesn't exist, add the item to the cart with quantity 1
        cart.push({ ...item, quantity: 1 });
    }
    return cart;
}

// Function to remove an item from a shopping cart with quantity tracking
function removeFromCart(cart, itemId) {
    // Check if the item exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
    if (existingItemIndex === -1) {
        // If the item is not found, return a new cart copy unchanged
        return [...cart];
    }

    // Create a new cart array so the input cart is not mutated
    const updatedCart = cart.map(cartItem => ({ ...cartItem }));
    if (updatedCart[existingItemIndex].quantity > 1) {
        // If the quantity is greater than 1, decrement the quantity
        updatedCart[existingItemIndex].quantity -= 1;
    }
    else {
        // If the quantity is 1, remove the item from the cart
        updatedCart.splice(existingItemIndex, 1);
    }
    return updatedCart;
}

module.exports = {
    addToCart,
    removeFromCart
};