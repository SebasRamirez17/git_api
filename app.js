let password = "AIzaSyAHLGtNwSOIkz2vqWRKuXUd6p7nd3upBbA";
let url = "https://tenor.googleapis.com/v2/featured?key=" + password
const container = document.getElementById("container");
const input = document.getElementById("input");

window.addEventListener("DOMContentLoaded", api);
input.addEventListener("keyup", search);

function search(event) {
    
    container.innerHTML="";
    let apiNew = `https://tenor.googleapis.com/v2/search?q=${event.target.value}&key=${password}`;

    fetch(apiNew)
    .then(response => response.json())
    .then(data => createGif(data))
}

function api() {
    fetch(url)
    .then(response => response.json())
    .then(data => createGif(data))
}

function createGif(data) {
    data["results"].map(results => {

        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.src = results.media_formats.gif.url;
        img.classList.add("img");
        
        div.appendChild(img);
        container.appendChild(div);
    })
}
