// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection using GET request on the URL endpoint.
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(element => {
      // Create a div with card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // Create an h1 and set the text content to the species name
      const h1 = document.createElement("h1");
      h1.textContent = element.title;

      container.appendChild(card);
      container.appendChild(h1);
    });
  }
};

const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

// Send request
request.send();
