var quote1 = '"If the universe is meaningless, so is the statement that it is so... The meaning and purpose of dancing is the dance."';
var author1 = '- Alan Watts';
var quote2 = '"Realize deeply that the present moment is all you have. Make the NOW the primary focus of your life."';
var author2 = '- Eckhart Tolle';
var quote3 = '"We are bathing in mystery and confusion on many subjects, and I think that will always be our destiny. The universe will always be much richer than our ability to understand it."';
var author3 = '- Carl Sagan';
var quote4 = '"If you don\'t have a plan, you become part of somebody else\'s plan."';
var author4 = '- Terence McKenna';
var quote5 = '"All companionship can consist in only the strengthening of neighboring solitudes... for when a person abandons himself, he is no longer anything, and when two people both give themselves up in order to become closer to each other, there is no longer any ground beneath them and their being together is a continual falling."';
var author5 = '- Rainer Maria Rilke';
var quote6 = '"They are (to quote the words used by Dr. J. R. Smythies in a recent paper in the American Journal of Psychiatry) the work of a highly differentiated mental compartment, without any apparent connection, emotional or volitional, with the aims, interests, or feelings of the person concerned."';
var author6 = '- Aldous Huxley';

var quoteArray = [quote1, quote2, quote3, quote4, quote5, quote6];
var authorArray = [author1, author2, author3, author4, author5, author6];

var quote = document.getElementById('quote');
var author = document.getElementById('author');

quote.innerHTML = quoteArray[0];
author.innerHTML = authorArray[0];

var previousButton = document.getElementById('previous-button');
var nextButton = document.getElementById('next-button');

var i = 0;

function previous (event) {
    if (i === 0) {
        quote.innerHTML = quoteArray[5];
        author.innerHTML = authorArray[5];
        i = 5;
    }
    else if (i === 1) {
        quote.innerHTML = quoteArray[0];
        author.innerHTML = authorArray[0];
        i = 0;
    }
    else if (i === 2) {
        quote.innerHTML = quoteArray[1];
        author.innerHTML = authorArray[1];
        i = 1;
    }
    else if (i === 3) {
        quote.innerHTML = quoteArray[2];
        author.innerHTML = authorArray[2];
        i = 2;
    }
    else if (i === 4) {
        quote.innerHTML = quoteArray[3];
        author.innerHTML = authorArray[3];
        i = 3;
    }
    else if (i === 5) {
        quote.innerHTML = quoteArray[4];
        author.innerHTML = authorArray[4];
        i = 4;
    }
}

function next (event) {
    if (i === 0) {
        quote.innerHTML = quoteArray[1];
        author.innerHTML = authorArray[1];
        i = 1;
    }
    else if (i === 1) {
        quote.innerHTML = quoteArray[2];
        author.innerHTML = authorArray[2];
        i = 2;
    }
    else if (i === 2) {
        quote.innerHTML = quoteArray[3];
        author.innerHTML = authorArray[3];
        i = 3;
    }
    else if (i === 3) {
        quote.innerHTML = quoteArray[4];
        author.innerHTML = authorArray[4];
        i = 4;
    }
    else if (i === 4) {
        quote.innerHTML = quoteArray[5];
        author.innerHTML = authorArray[5];
        i = 5;
    }
    else if (i === 5) {
        quote.innerHTML = quoteArray[0];
        author.innerHTML = authorArray[0];
        i = 0;
    }
}

//setInterval(next, 16000);

previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
