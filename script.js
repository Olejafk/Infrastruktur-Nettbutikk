
// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    { id: 4, name: 'Product 4', price: 49.99 },
    { id: 5, name: 'Product 5', price: 59.99 },
    { id: 6, name: 'Product 6', price: 69.99 },
    { id: 7, name: 'Product 7', price: 79.99 },
    { id: 8, name: 'Product 8', price: 89.99 },
];

// Sample cart data
let cart = [];

function displayProducts() {
    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    // Implement checkout logic (e.g., send order to server)
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}

// Display products when the page loads
displayProducts();
