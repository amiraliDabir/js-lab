function showimg(index){
    let mainimg = document.querySelector(".mainimage");
    let img = document.querySelectorAll(".image");
    let address = img[index-1].getAttribute("src");
    mainimg.setAttribute("src" , address);
    
}