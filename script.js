// script.js
const productData = [
    { id: 1, name: "Produit 1", price:  10, image: "assets/img/gallery/creme1.jpeg" },
    { id: 2, name: "Produit 2", price: 20, image: "assets/img/gallery/creme2.jpeg"},
    { id: 3, name: "Produit 3", price: 30, image: "assets/img/gallery/creme3.jpeg"},
    { id: 1, name: "Produit 1", price:  10, image: "assets/img/gallery/creme1.jpeg" },
    { id: 2, name: "Produit 2", price: 20, image: "assets/img/gallery/creme2.jpeg"},
    { id: 3, name: "Produit 3", price: 30, image: "assets/img/gallery/creme3.jpeg"},
    
];

const cart = [];

function renderProducts() {
    const productContainer = document.querySelector(".product-list");
    productContainer.innerHTML = "";

    productData.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <span>${product.name}</span>
        <span>${product.price} €</span>
        <button onclick="addToCart(${product.id})">Ajouter au panier</button>  
           
        `;
        productContainer.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = productData.find(item => item.id === productId);
    cart.push(product);
    renderCart();

   

}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        renderCart();
    }
}



function renderCart() {
    const cartContainer = document.querySelector(".cart");
    cartContainer.innerHTML = "";

    cart.forEach(product => {
        const cartItem = document.createElement("div");
        
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <span>${product.name}</span>
        <span>${product.price} €</span>
            <button onclick="removeFromCart(${product.id})">Supprimer</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Calcul du total
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    const footer = document.querySelector("footer");
    footer.innerHTML = `Total : ${total} €`;
}

// Initialisation
renderProducts();
renderCart();
