const cartContainer = document.getElementById("cartItems");
const totalElement = document.getElementById("total");

function loadCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                
                <div class="info">
                    <h3>${item.name}</h3>
                    <p>R$ ${item.price}</p>
                </div>

                <button onclick="removeItem(${index})">Remover</button>
            </div>
        `;
    });

    totalElement.textContent = total;
}

function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

loadCart();