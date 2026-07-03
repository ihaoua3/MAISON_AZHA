let cart = [];

// afficher produits automatiquement
function displayProducts() {
  const container = document.getElementById("products");

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>${p.price} FCFA</p>
        <button onclick="addToCart(${p.id})">Ajouter au panier</button>
      </div>
    `;
  });
}

// ajouter au panier
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// mise à jour panier
function updateCart() {
  const list = document.getElementById("cart");
  let total = 0;

  let html = "<h2>Panier</h2>";

  cart.forEach(item => {
    html += `<p>${item.name} - ${item.price} FCFA</p>`;
    total += item.price;
  });

  html += `<h3>Total : ${total} FCFA</h3>`;

  html += `
    <button onclick="checkout('momo')">Payer Mobile Money</button>
    <button onclick="checkout('om')">Payer Orange Money</button>
  `;

  list.innerHTML = html;
}

// paiement simulé
function checkout(method) {
  alert("Paiement " + method.toUpperCase() + " en cours...");
}

// lancer le site
window.onload = function () {
  displayProducts();
  updateCart();
};