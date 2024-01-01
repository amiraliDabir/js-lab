let countries = ["usa", "uk", "germany", "palestine", "poland", "iran"];
let body = document.querySelector("body");

let letters = [];

function firstLetter() {
    countries.forEach(item => letters.push(item[0]));
    return letters
}
let firstLetters = firstLetter();
countries.sort();





let unRepeatedLetters = function () {
    let unRepeated = [];
    let temp = countries[0][0];
    for (let i = 1; i < countries.length; i++) {
        if (temp != countries[i][0]) {
            temp = countries[i][0];
            unRepeated.push(temp);
        }

    }
    return unRepeated;
};


let unRepeated = unRepeatedLetters();


function filtered() {
    let result;

    for (let i = 0; i < unRepeated.length; i++) {
        let heading = document.createElement("h2");
        heading.textContent = unRepeated[i];
        body.appendChild(heading);
        let ul = document.createElement("ul");

        result = countries.filter((item) => item[0] == unRepeated[i]);

        let liItems = result.map(item => {
            let li = document.createElement("li");
            li.textContent = item;
            return li;
        })

        for (const li of liItems) {
            ul.appendChild(li);
        }
        body.appendChild(ul);



    }

}








