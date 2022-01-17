/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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
    year: "2009"
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
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  var randomNum = Math.floor(Math.random() * quotes.length);
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  var randomQuote = quotes[randomNum];
  // 3. Return the variable storing the random quote object
  return randomQuote;
}
/***
 * `printQuote` function
***/
function printQuote() {
var rQO = getRandomQuote();  
var htmlString = `<p class="quote"> ${rQO.quote} </p><p class="source"> ${rQO.source} `;
if (rQO.citation) {
  htmlString += `<span class="citation"> ${rQO.citation} </span>`;
}
if (rQO.year) {
  htmlString += `<span class="year"> ${rQO.year} </span>`;
}
htmlString += `</p>`;
return document.getElementById('quote-box').innerHTML = htmlString; 
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);