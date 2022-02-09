//Get data API

const url = 'https://type.fit/api/quotes';


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    return showData (data);
}
getData();


function showData (data) {
    let n = Math.floor (Math.random()*data.length);
    paragraph.textContent = `${data[n].text}\n ${data[n].author}`;

};

let paragraph = document.querySelector ('.paragraph')
let button = document.querySelector ('.button');

button.addEventListener ('click', getData);
