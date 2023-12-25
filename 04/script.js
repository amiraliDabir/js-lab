function changeSlide(event) {
console.log(event.target)
    if (event.deltaY < 0) {
        if (event.target.previousElementSibling != null){
        event.target.classList.add("godown");}
    }
   
    else if (event.deltaY > 0) {
        

        if (event.target.nextElementSibling != null) {
            event.target.nextElementSibling.classList.remove("godown");
        }



    }
}







window.addEventListener("wheel", changeSlide);












