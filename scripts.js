// Initialize cart data
let cart = [];

// Select elements
const cartCount = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items');
const cartModal = document.getElementById('cart-modal');
const closeModalButton = document.getElementById('close-modal');
const cartButton = document.getElementById('cart-btn');
const cartTotal = document.getElementById('cart-total');

// Event listener for adding items to the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.dataset.name;
        const productPrice = parseFloat(event.target.dataset.price);

        // Add product to cart
        cart.push({ name: productName, price: productPrice });

        // Update cart count and total
        updateCart();
    });
});

// Function to update the cart count and total
function updateCart() {
    const cartLength = cart.length;
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

    // Update the cart icon count
    cartCount.textContent = cartLength;

    // Update the cart total
    cartTotal.textContent = totalPrice.toFixed(2);

    // Update the cart items display
    cartItemsList.innerHTML = cart.map(product => `
        <li>${product.name} - $${product.price.toFixed(2)}</li>
    `).join('');
}

// Open cart modal when the cart button is clicked
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

// Close cart modal
closeModalButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Close cart modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});