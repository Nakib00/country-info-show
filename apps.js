var userText = "bangladesh";

var url = `https://restcountries.com/v3.1/name/${userText}?fullText=true`;

fetch(url)
  .then((res) => res.json())
  .then((data) => show(data));

function connect() {
  //user input
  var userText = document.getElementById("user-input").value;

  var url = `https://restcountries.com/v3.1/name/${userText}?fullText=true`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  var newdata = Array.from(data);
  const name = newdata[0].name.common;
  const flag = newdata[0].flags.png;
  const capital = newdata[0].capital;
  const population = newdata[0].population;
  const region = newdata[0].region;
  const subregion = newdata[0].subregion;
  const startOfWeek = newdata[0].startOfWeek;

  var borders =  newdata[0].borders;

  const pngflag = document.querySelector(".flag");
  
  
  document.getElementById("name").innerHTML = name;
  document.getElementById("capital").innerHTML = capital;
  document.getElementById("population").innerHTML = population;
  document.getElementById("region").innerHTML = region;
  document.getElementById("subregion").innerHTML = subregion;
  document.getElementById("startOfWeek").innerHTML = startOfWeek;
  document.getElementById("borders").innerHTML = borders;
  pngflag.innerHTML = `<img src="${flag}"/>`;
}
