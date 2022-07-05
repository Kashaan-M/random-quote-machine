let colors = ["w3-blue","w3-blue-gray", "w3-khaki", "w3-green", "w3-deep-orange","w3-teal","w3-brown", "w3-deep-purple", "w3-cyan", "w3-lime","w3-amber","w3-light-blue","w3-yellow","w3-red","w3-indigo"];
let textColors = ["w3-text-blue","w3-text-blue-gray", "w3-text-khaki", "w3-text-green", "w3-text-deep-orange","w3-text-teal","w3-text-brown", "w3-text-deep-purple", "w3-text-cyan", "w3-text-lime","w3-text-amber","w3-text-light-blue","w3-text-yellow","w3-text-red","w3-text-indigo"];
let main = document.querySelector("main");
let quoteSymbol = document.querySelector("#open-quote"); 
let quote = document.getElementById("text");
let author = document.getElementById("author");
let tweetBtn = document.querySelector("#tweet-btn");
let newQuote = document.querySelector("#new-quote");
let footer = document.querySelector("footer");

let elements = [main,quoteSymbol,quote,author,tweetBtn,newQuote,footer];
 let quotesApi = "https://type.fit/api/quotes";
let quotesArray = [];
/*****************************/
async function fetchQuotes() {
  const response = await fetch(quotesApi)
    .then((blob) => blob.json())
    .then((data) => quotesArray.push(...data));
   
    quote.innerText =  quotesArray[1429]["text"];
    author.innerText = "- " + quotesArray[1429]["author"];
}
/******************************/
fetchQuotes();


const changeColorRandomly = (e) => {

  let color = `${colors[randomColor()]}`;
  let textColor = `${textColors[colors.indexOf(color)]}`;

  elements.map(i => {

    // checking if i of elements is equal to quoteSymbol or quote or author.if true, then we have to use the "w3-text-color" classes defined inside "textColors" array
    if( i == quoteSymbol || i == quote || i == author) {

      if(i.classList.contains("w3-text-blue")) {
      i.classList.add("trans");
      i.classList.replace("w3-text-blue", textColor);
    }
      else if(i.classList.contains(textColor)) {
        if(textColors.indexOf(textColor) !== 15) {
          let newColor = `${textColors[(textColors.indexOf(textColor)) + 1]}`;
          i.classList.add("trans");
          i.classList.replace(textColor, newColor);
        }
        else {
          let clr = `${textColors[0]}`;
          i.classList.add("trans");
          i.classList.replace(textColor, clr);
        }
      }
      else {
        for (let colorClasses of textColors) {
          if(i.classList.contains(colorClasses)) {
            i.classList.add("trans");
            i.classList.replace(colorClasses, textColor);
          }
          else {
            continue;
          }
        }
      }
    
    }
    // if i of elements is not equal to quoteSymbol or quote or author then we have to use "w3-color" classes defined inside the "colors" array
    else {

      if(i.classList.contains("w3-blue")) {
      i.classList.add("trans");
      i.classList.replace("w3-blue", color);
    }
      else if(i.classList.contains(color)) {
        if(colors.indexOf(color) !== 15) {
          let newColor = `${colors[(colors.indexOf(color)) + 1]}`;
          i.classList.add("trans");
          i.classList.replace(color, newColor);
        }
        else {
          let clr = `${colors[0]}`;
          i.classList.add("trans");
          i.classList.replace(color, clr);
        }
      }
      else {
        for (let colorClasses of colors) {
          if(i.classList.contains(colorClasses)) {
            i.classList.add("trans");
            i.classList.replace(colorClasses, color);
          }
          else {
            continue;
          }
        }
      }
    }

    // change the quote using randomQuoteIndex() so we get a random quote and a corresponding author
    let index = randomQuoteIndex();
    quote.innerText = quotesArray[index]["text"];
    author.innerText = "- " + quotesArray[index]["author"];
    
  });

}
const randomColor = () => {
  return Math.round(Math.random() * (colors.length - 1));
}
const randomQuoteIndex = () => {
  return Math.round(Math.random() * (quotesArray.length - 1));
}



newQuote.addEventListener('click',changeColorRandomly);