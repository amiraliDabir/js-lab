//vars
let container = document.querySelector(".container")
let products;
let data;
let addToCart;
let productsInCart;
let cartArr = [];
let cart = document.getElementById("cart");
let home = document.getElementById("home")
//requests
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => render(json));



//functions
function render(data) {
    let temp = data.map(product => {
        if ((product.title).length >= 19) {
            product.title = product.title.slice(0, 19)
            product.title += "..."
        }
        return `
        <div class="container__card" id="${product.id}">
            <img src=${product.image} alt="">
            <div class="container__card__detail">
                <h2 class="container__card__detail__name"> ${product.title}</h2>
                <p class=container__card__detail__price>${product.price}$</p>
            </div>
        </div>
        `
    }).join("");

    container.innerHTML = temp;

    products = document.querySelectorAll(".container__card");
    for (const product of products) {
        product.addEventListener("click", singleProduct)
    }
}
function renderSingleProduct(product) {
    container.innerHTML = "";
    container.classList.remove("container");
    container.classList.add("cart-container");
    container.innerHTML = `
    <img src=${product.image}>
    <div class="cart-container__desc" id="${product.id}">
        <h3 class="cart-container__desc__category">category : <span id="category">${product.category}</span></h3>
        <h3 class="cart-container__desc__detail">${product.title}</h3>
        <p>${product.description}</p>
        <h3 class="cart-container__desc__detail">price: ${product.price}$</h3>
        <button class="cart-container__desc__btn">ADD TO CART</button>
    </div>
    `
    container.classList.add("cart-container");
    addToCart = document.querySelector(".cart-container__desc__btn")
    addToCart.addEventListener("click", add)


}

function singleProduct() {
    let id = this.getAttribute("id")
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => renderSingleProduct(json));
}
function add() {
    let id = this.parentElement.getAttribute("id");
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => json.find(book => book.id == id))
        .then(book => cartArr.push(book));

};

function showCart() {
    render(cartArr);
}
function Home() {
    container.classList.remove("cart-container")
    container.classList.add("container")
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => render(json));
}






//Events
cart.addEventListener("click", showCart);
home.addEventListener("click", Home);
