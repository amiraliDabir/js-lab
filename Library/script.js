//data
const BOOKS = [
    {
        id: 1,
        title: "خواجه تاجدار",
        author: "ژان گور",
        published_date: 2007,
        language: "persian",
        genre: "تاریخ",
        imgSrc: "1.jpg"
    },
    {
        id: 2,
        title: "ضیافت",
        author: "افلاطون",
        published_date: 385,
        language: "greek",
        genre: "فلسفه",
        imgSrc: "2.jpg"
    },
    {
        id: 3,
        title: "منطق الطیر",
        author: "عطار",
        published_date: 1177,
        language: "persian",
        genre: "شعر",
        imgSrc: "3.jpg"
    },
    {
        id: 4,
        title: "مثنوی معنوی",
        author: "مولوی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "4.jpg"
    },
    {
        id: 5,
        title: "دیوان حافظ",
        author: "حافظ",
        published_date: 1200,
        language: "persian",
        genre: "شعر",
        imgSrc: "5.jpg"
    },
    {
        id: 6,
        title: "رومیو و جولیت",
        author: "ویلیام شکسپیر",
        published_date: 1595,
        language: "english",
        genre: "عاشقانه",
        imgSrc: "6.jpg"
    },
    {
        id: 7,
        title: "ویس و رامین",
        author: "فخرالدین اسعد گرگانی",
        published_date: 1054,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "7.jpg"
    },
    {
        id: 8,
        title: "گلستان",
        author: "سعدی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "8.jpg"
    },
    {
        id: 9,
        title: "بوستان",
        author: "سعدی",
        published_date: 1257,
        language: "persian",
        genre: "شعر",
        imgSrc: "9.jpg"
    },
    {
        id: 10,
        title: "گلشن راز",
        author: "شیخ محمود شبستری",
        published_date: 1311,
        language: "persian",
        genre: "شعر",
        imgSrc: "10.jpg"
    },
    {
        id: 11,
        title: "لیلی و مجنون",
        author: "نظامی",
        published_date: 1188,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "11.jpg"
    },
    {
        id: 12,
        title: "شاهنامه",
        author: "فردوسی",
        published_date: 1010,
        language: "persian",
        genre: "شعر",
        imgSrc: "12.jpg"
    },
    {
        id: 13,
        title: "ایلیاد",
        author: "هومر",
        published_date: 762,
        language: "greek",
        genre: "شعر",
        imgSrc: "13.jpg"
    },
    {
        id: 14,
        title: "اودیسه",
        author: "هومر",
        published_date: 725,
        language: "greek",
        genre: "شعر",
        imgSrc: "14.jpg"
    },
    {
        id: 15,
        title: "هملت",
        author: "ویلیام شکسپیر",
        published_date: 1609,
        language: "greek",
        genre: "درام",
        imgSrc: "15.jpg"
    },
    {
        id: 16,
        title: "دن کیشوت",
        author: "میگل دسروانتس",
        published_date: 1605,
        language: "spanish",
        genre: "درام",
        imgSrc: "16.jpg"
    }
]



//variables

let container = document.querySelector(".container")
let bucket = document.querySelector(".navbar__bucket")
let fav = [];
let pluses;
let home = document.querySelector(".navbar__home");
let filteredLanguage = document.querySelector(".filter__language");
let filterdAuthors = document.querySelector(".filter__author");
let filterdGeners = document.querySelector(".filter__genere");
let inputItems;


//functions

function render() {
    let temp = BOOKS.map(book => {
        return `
<div class="container__card " id='${book.id}'>
    <div class="container__card__cover">
        <h2 class="container__card__cover__title"><span>عنوان:</span>  ${book.title}</h2>
        <i class="far fa-plus container__card__cover__plus"></i>
        <p class="container__card__cover__author">${book.author}</p>
        <p class="container__card__cover__language">${book.language}</p>
    </div>
    <img src="./assets/image/${book.id}.jpg">
</div>
                `
    }).join("")
    container.innerHTML = temp;
    pluses = document.querySelectorAll(".container__card__cover__plus");

    for (const plus of pluses) {
        plus.addEventListener("click", addToFav);
    }
}


function addToFav() {

    let id = (this.parentElement.parentElement.getAttribute("id"))
    let found = BOOKS.find(book => book.id == id);
    fav.push(found);


}

function showFav() {
    container.innerHTML = "";
    container.classList.remove("container");
    container.classList.add("favContainer");
    renderFavs()

}

function renderFavs() {
    let temp = fav.map(favBook => {
        return `
    <div class="favContainer__card">
    <img src="./assets/image/${favBook.id}.jpg">
    <div class="favContainer__card__detail">
        <h2><span>عنوان:</span>${favBook.title}</h2>
        <p><span>شاعر/نویسنده:</span>${favBook.author}</p>
        <p><span>زبان:</span>${favBook.language}</p>
    </div>
    
</div>
    `
    }).join("")
    container.innerHTML = temp;
}

function Home() {
    container.classList.remove("favContainer");
    container.classList.add("container");
    container.innerHTML = ""
    render();
}
function renderFilters() {
    let langs = BOOKS.map(item => {
        return item.language;


    }).sort();
    let unrepeatedLangs = [];
    for (let index = 0; index < langs.length; index++) {
        if (langs[index] != langs[index + 1]) {
            unrepeatedLangs.push(langs[index]);
        }

    }
    let temp1 = unrepeatedLangs.map(lang => {
        return `
    <div>
        <input type="checkbox" id="${lang}" name="language" />
        <label for="${lang}">${lang}</label>
    </div>
    `
    }).join("");
    filteredLanguage.innerHTML += temp1;


    let authors = BOOKS.map(item => {
        return item.author;


    }).sort();
    let unrepeatedats = [];
    for (let index = 0; index < authors.length; index++) {
        if (authors[index] != authors[index + 1]) {
            unrepeatedats.push(authors[index]);
        }

    }
    let temp2 = unrepeatedats.map(author => {
        return `
    <div>
        <input type="checkbox" id="${author}" name="author" />
        <label for="${author}">${author}</label>
    </div>
        `}).join("");
    filterdAuthors.innerHTML += temp2;



    let genres = BOOKS.map(item => {
        return item.genre;
    }).sort();
    let unrepeatedgenres = [];
    for (let index = 0; index < genres.length; index++) {
        if (genres[index] != genres[index + 1]) {
            unrepeatedgenres.push(genres[index]);
        }

    }
    let temp3 = unrepeatedgenres.map(genre => {
        return `
    <div>
        <input type="checkbox" id="${genre}" name="genre" />
        <label for="${genre}">${genre}</label>
    </div>
        `}).join("");
    filterdGeners.innerHTML += temp3;

}


//events

bucket.addEventListener("click", showFav);
home.addEventListener("click", Home);

//calling-functions
render();
renderFilters();