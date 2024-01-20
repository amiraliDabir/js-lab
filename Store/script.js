//vars
let container = document.querySelector(".container")
let products ;
let data;
//requests
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>render(json));



//functions
function render(data){
    let temp= data.map(product=>{
        if ((product.title).length>=19){
            product.title=product.title.slice(0,19)
            product.title+="..."
        }
        return `
        <div class="container__card" id="${product.id}">
            <img src=${product.image} alt="">
            <div class="container__card__detail">
                <h2 class="container__card__detail__name"> ${product.title}</h2>
                <p class=container__card__detail__price>${product.price}</p>
            </div>
        </div>
        `
    }).join("");
    
    container.innerHTML=temp

    products = document.querySelectorAll(".container__card");
    for (const product of products) {
        product.addEventListener("click",singleProduct)
    }
}
function renderSingleProduct(product){
    container.innerHTML= `
    <div class="container__card" id="${product.id}">
        <img src=${product.image} alt="">
        <div class="container__card__detail">
            <h2 class="container__card__detail__name"> ${product.title}</h2>
            <p class=container__card__detail__price>${product.price}</p>
        </div>
    </div>
    `
}

function singleProduct(){
    let id = this.getAttribute("id")
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>renderSingleProduct(json))

}




// calling functions







//Events

