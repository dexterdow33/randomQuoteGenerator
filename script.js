
// selects random quote object from quotes array
function getRandomQuote() {
  //generates random number
  var randomQuote = Math.floor( Math.random() * quotes.length );
  //returns quote that matches the random number
  return quotes[randomQuote];
}
//prints quote chosen from the getRandomQuote function
function printQuote(){
    var print = getRandomQuote();
    //adds quote and source to the variable to be printed
    var printQuotePhrase = '<p class="quote">' + print.quote + '</p>';
        printQuotePhrase += '<p class="source"> ' + print.source ;
    //checks if either citation or year are empty, if so add the other to the message variable
        if (print.citation !== ''){
            printQuotePhrase += '<span class="citation">' + print.citation + '</span>' + '</p>';
        }

        if (print.year !== ''){
            printQuotePhrase += '<span class="year">' + print.year + '</span>' + '</p>';
        }
    //write the full quote to the HTML page
    document.getElementById('quote-box').innerHTML = printQuotePhrase;
}
//randomly generate and display a quote 1000 miliseconds after button is clicked
function intervalQuote(){
    var timeout = window.setTimeout(printQuote, 1000);
}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
