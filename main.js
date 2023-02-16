let container = document.querySelector(".container");
let API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    data.Search.forEach((item) => {
      container.innerHTML += `
      <div class='card'>
        <img src='${item.Poster}'/>
        <h4>${item.Title}</h4>
        <p>Year ${item.Year}</p>
        </div>`;
    });
  });
