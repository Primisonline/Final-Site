// Light/Dark Mode toggle
const logo = document.getElementById('logo');
const body = document.body;

logo.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }
});

// Product Info Modal
function showProductInfo(name, price) {
    document.getElementById('product-name').innerText = name;
    document.getElementById('product-price').innerText = `Price: $${price.toFixed(2)}`;
    document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Cart functionality
let cart = [];

function addToCart(name, price) {
    const product = { name, price };
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    // Store cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update checkout page or cart UI
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Calculate totals (Subtotal, Sales Tax, State Tax)
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const salesTax = subtotal * 0.057;
    const stateTax = subtotal * 0.092;
    const total = subtotal + salesTax + stateTax;

    const summary = document.getElementById('cart-summary');
    summary.innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Sales Tax (5.7%): $${salesTax.toFixed(2)}</p>
        <p>State Tax (9.2%): $${stateTax.toFixed(2)}</p>
        <p>Total: $${total.toFixed(2)}</p>
    `;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}
