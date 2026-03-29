const container = document.getElementById("products");

function renderProducts(){

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>R$ ${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Adicionar
                </button>
            </div>
        `;
    });
}

renderProducts();
updateCartCount();