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