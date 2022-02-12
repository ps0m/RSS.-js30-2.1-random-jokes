//Get data API

let url = 'https://raw.githubusercontent.com/ps0m/Quote-JSON/main/input.json';
let person; 

let photo = document.querySelector ('.image');
let paragraph = document.querySelector ('.paragraph');
let buttonStart = document.querySelector ('.start');
let buttonLanguage = document.querySelector ('.language');

// get Quote 

async function getData() {
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
    paragraph.textContent = `${data[n].text}\n ${data[n].author}`;
    // console.log(person);
};

buttonStart.addEventListener ('click', getData);


function changeLanguage () {
    if (url =='https://raw.githubusercontent.com/ps0m/Quote-JSON/main/input.json') {
        url = 'https://raw.githubusercontent.com/ps0m/file-storage/random-jokes/belarusian_quotes.json'
    } else if (url = 'https://raw.githubusercontent.com/ps0m/file-storage/random-jokes/belarusian_quotes.json') {
        url = 'https://raw.githubusercontent.com/ps0m/Quote-JSON/main/input.json';
    }
    getData();
}

// get Photo

async function getPhoto() {
    let urlPhoto = `https://api.unsplash.com/search/photos?query=+${person}+&client_id=D1EM9wlZ6FvGjeCfS61tB4jNnFalrgFm_4j_quY7Vto`;
    const res = await fetch(urlPhoto);
    const data = await res.json();
    showPhoto (data);
    
    console.log(urlPhoto);
}
setTimeout (getPhoto, 300);

function showPhoto (data){
    photo.style.background = "url(data.results[0].urls.regular)";
};

buttonStart.addEventListener ('click',() => setTimeout(getPhoto, 300)  );


function changeLanguage () {
    if (url =='https://raw.githubusercontent.com/ps0m/Quote-JSON/main/input.json') {
        url = 'https://raw.githubusercontent.com/ps0m/file-storage/random-jokes/belarusian_quotes.json'
    } else if (url = 'https://raw.githubusercontent.com/ps0m/file-storage/random-jokes/belarusian_quotes.json') {
        url = 'https://raw.githubusercontent.com/ps0m/Quote-JSON/main/input.json';
    }
    getData();
}

buttonLanguage.addEventListener ('click', changeLanguage);

// setTimeout (()=> {console.log(person)}, 2000);


