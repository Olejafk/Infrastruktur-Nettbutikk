// Your JavaScript code for managing the web store

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products as needed
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
