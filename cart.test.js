const { removeFromCart } = require('./cart.js');

// Test 1: Decrements quantity when quantity > 1
const cartWithMultipleQuantity = [
    { id: 1, name: 'Laptop', quantity: 2 }
];
const updatedCart1 = removeFromCart(cartWithMultipleQuantity, 1);
console.assert(updatedCart1.length === 1, 'Test 1 failed: cart length should remain 1');
console.assert(updatedCart1[0].quantity === 1, 'Test 1 failed: quantity should decrement to 1');
console.assert(cartWithMultipleQuantity[0].quantity === 2, 'Test 1 failed: input cart should not be mutated');

// Test 2: Removes item completely when quantity is 1
const cartWithSingleQuantity = [
    { id: 2, name: 'Mouse', quantity: 1 }
];
const updatedCart2 = removeFromCart(cartWithSingleQuantity, 2);
console.assert(updatedCart2.length === 0, 'Test 2 failed: item should be removed when quantity is 1');
console.assert(cartWithSingleQuantity.length === 1, 'Test 2 failed: input cart should not be mutated');

// Test 3: Returns cart unchanged when item ID not found
const cartWithOtherItems = [
    { id: 3, name: 'Keyboard', quantity: 1 }
];
const updatedCart3 = removeFromCart(cartWithOtherItems, 99);
console.assert(updatedCart3.length === cartWithOtherItems.length, 'Test 3 failed: cart length should remain unchanged');
console.assert(updatedCart3 !== cartWithOtherItems, 'Test 3 failed: returned cart should be a new array');
console.assert(updatedCart3[0].id === cartWithOtherItems[0].id, 'Test 3 failed: cart contents should remain unchanged');

// Test 4: Handles empty cart input gracefully
const emptyCart = [];
const updatedCart4 = removeFromCart(emptyCart, 1);
console.assert(Array.isArray(updatedCart4), 'Test 4 failed: result should be an array');
console.assert(updatedCart4.length === 0, 'Test 4 failed: empty cart should stay empty');

console.log('All tests passed.');
