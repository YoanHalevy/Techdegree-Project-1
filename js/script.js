/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*** 
 * Building an array called "quotes" to store the quotes 
***/
var quotes = [
  {
    quote: "The funny thing about being smart, is that you can get through most of life without ever having to do any work.",
    source: "Jeff Winger",
    citation: "Community",
    year: "2009"
  },
  {
    quote: "You can do whatever you want, you just have to know what that is.",
    source: "Abed Nadir",
    citation: "Community",
    year: "2009"
  },
  {
    quote: "I was never one to hold a grudge. My father held grudges, I’ll always hate him for that.",
    source: "Pierce Hawthorne",
    citation: "Community",
    year: "2009",
    tags: "Humor, Irony, Tv Series"
  },
  {
    quote: "You see, Jeff, there are certain things man was not meant to hear. We were designed by whatever entity you choose to hear what's in this range, and really this range alone. Because you know who's talking to us in this range? The people we love.",
    source: "Pierce Hawthorne",
    citation: "Community",
    year: "2009"
  },
  {
    quote: "Why are we in such a rush to leave the tide pool when the only things waiting for us on shore are the sands of time and the hungry seagulls of slowly growing apart?",
    source: "Jeff Winger",
    citation: "Community",
    year: "2009"
  }
]
/***
 * creating a function to generate a random number and pull a corresponding quote from the array
***/
function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNum];
  return randomQuote;
}
/***
 * creating a function that uses the pulled quote to print it to the page
***/
function printQuote() {
  var rQO = getRandomQuote();  
  var htmlString = `<p class="quote">${rQO.quote}</p><p class="source">${rQO.source}`;
  if (rQO.citation) {
    htmlString += `<span class="citation">${rQO.citation}</span>`;
  }
  if (rQO.year) {
    htmlString += `<span class="year">${rQO.year}</span>`;
  }
  if (rQO.tags) {
    htmlString += `<span class="year">${rQO.tags}</span>`;
  }
  htmlString += `</p>`;
  document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8);
  return document.getElementById('quote-box').innerHTML = htmlString; 
}
// Setting a 10 second refresh rate for the quotes
setInterval(printQuote, 10000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);