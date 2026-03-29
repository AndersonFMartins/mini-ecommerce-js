function addToCart(id){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(p => p.id === id);

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    showToast(`🛒 ${product.name} adicionado!`);
    updateCartCount();
}
function showToast(message){

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
function updateCartCount(){

    const countElement = document.getElementById("cartCount");

    if(!countElement) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    countElement.textContent = cart.length;
    if(cart.length === 0){
    countElement.style.display = "none";
    } else {
    countElement.style.display = "block";
    }  
}