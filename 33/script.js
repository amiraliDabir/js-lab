let body = document.querySelector("body");
let bgs= ["yB","redB","dk","new-batmobile"];
let next = document.getElementById("next");
let pre = document.getElementById("pre");

let count = 0;

body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)";


let obj=setInterval(changeBg,5000)
function changeBg(){
    count++;
    if(count!=bgs.length){
  
    body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)"; }
    else{
        count=0;
        body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)";
    }
}


function previous(){
    count--;
    if(count>=0){
    body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)"; }
  
    else{
       
        count=(bgs.length)-1;
        body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)";
    }
}





function nextBg(){
    clearInterval(obj);
 
    count++;
    if(count!=bgs.length){
  
    body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)"; }
    else{
        count=0;
        body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)";
    }
    setTimeout(changeBg,5000);
    
}

function preBg(){
    clearInterval(obj);
    
    count--;
    if(count>=0){
    body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)"; }
  
    else{
       
        count=(bgs.length)-1;
        body.style.backgroundImage="url(./images/"+bgs[count]+".jpg)";
    }
    setTimeout(previous,5000);
}








next.addEventListener("click",nextBg);
pre.addEventListener("click",preBg);








