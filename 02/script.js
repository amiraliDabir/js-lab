
function randomBg(index) {
    let div = document.querySelectorAll(".innerdiv")

    let a = [];
    for (let i = 0; i < 3; i++) {
        a.push(Math.floor(Math.random() * 256));
    }
    for (let i = 0; i<div.length; i++) {
        div[i].style = "";
    }

    div[index].style.backgroundColor = `rgb(${a[0]},${a[1]},${a[2]})`;

}

