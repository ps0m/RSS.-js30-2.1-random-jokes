//Get data API

let person;
let language = "en" 

let photo = document.querySelector ('.image');
let paragraph = document.querySelector ('.paragraph');
let buttonStart = document.querySelector ('.start');
let buttonLanguage = document.querySelector ('.language');
let container = document.querySelector ('.container');
let imor = document.querySelector ('.imor');
let paragraphAuthor = document.querySelector ('.paragraph_author')


// get Quote 

async function getData() {
    let url;
    if (language == "en") {
        url = 'https://raw.githubusercontent.com/ps0m/Quote-JSON/main/input.json';
    } else if (language === "by") {
        url = 'https://raw.githubusercontent.com/ps0m/file-storage/random-jokes/belarusian_quotes.json'
    }
    const res = await fetch(url);
    const data = await res.json();
    showData (data);
}

getData();

function showData (data) {

    let n = Math.floor (Math.random()*data.length);
    if (data[n].author == null) {
        data[n].author = "Unknown author";
    }

    person = data[n].author;
    paragraph.textContent = `${data[n].text}`; 
    paragraphAuthor.textContent = `${data[n].author}`; 
    paragraph.classList.remove ('paragraph');
    paragraphAuthor.classList.remove ('paragraph_author');

};

// get Photo

async function getPhoto() {
    let urlPhoto;
    if (language == "en") {
        urlPhoto = `https://api.unsplash.com/search/photos?query=+${person}+&orientation=landscape&client_id=D1EM9wlZ6FvGjeCfS61tB4jNnFalrgFm_4j_quY7Vto`;
        buttonStart.textContent = "New Quote!";
        buttonLanguage.textContent = "Let`s Belarus!";
    } else if (language === "by") {
        urlPhoto = `https://raw.githubusercontent.com/ps0m/Quote-JSON/main/Photo.json`;
        buttonStart.textContent = "Новая цытата!";
        buttonLanguage.textContent = "Па-ангельску!";
    }
    
    const res = await fetch(urlPhoto);
    const data = await res.json();
    showPhoto (data);
}
setTimeout (getPhoto, 300);

function showPhoto (data){
    if (language == "en") {
        photo.src = data.results[0].urls.regular;
    } else if (language === "by") {
        for (item of data) {
            if (item.author == person){
                photo.src = item.image;
            }
        }
    }
    paragraph.classList.add ('paragraph');
    paragraphAuthor.classList.add ('paragraph_author');


};

// change language 

function changeLanguage () {
    if (language === "en") {
        language = "by" ;
    } else if (language === "by") {
        language = "en" ;
    }
    getData();
    setTimeout(getPhoto, 300)
}

buttonStart.addEventListener ('click',() => setTimeout(getPhoto, 300));
buttonStart.addEventListener ('click', getData);
buttonLanguage.addEventListener ('click', changeLanguage);


