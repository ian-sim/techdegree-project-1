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
// Create array containing quotes for generator
const quotes = [
	{
		quote:
			"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
		source: "Albert Einstein",
	},
	{
		quote:
			"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
		source: "Bernard M. Baruch",
	},
	{
		quote: "Be the change that you wish to see in the world.",
		source: "Mahatma Gandhi",
		tags: ["inspiration"],
	},
	{
		quote: "No one can make you feel inferior without your consent.",
		source: "Eleanor Roosevelt",
		citation: "This is My Story",
		tags: ["inspiration"],
	},
	{
		quote: "Always forgive your enemies; nothing annoys them so much.",
		source: "Oscar Wilde",
		tags: ["humor"],
	},
	{
		quote:
			"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
		source: "Martin Luther King Jr.",
		citation: "A Testament of Hope: The Essential Writings and Speeches",
		year: 1957,
		tags: ["inspiration", "politics"],
	},
	{
		quote:
			"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
		source: "Ralph Waldo Emerson",
	},
	{
		quote:
			"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
		source: "Dr. Seuss",
		citation: "Oh, the Places You'll Go!",
	},
	{
		quote:
			"For every minute you are angry you lose sixty seconds of happiness.",
		source: "Ralph Waldo Emerson",
	},
];

/***
 * `getRandomQuote` function
 ***/
// Create function to select random array indice
function getRandomQuote() {
	// Create variable used to store random integer in range of the array length
	let randomIndice = Math.floor(Math.random() * quotes.length);
	// Store random quote object in variable
	let randomQuoteObject = quotes[randomIndice];
	return randomQuoteObject;
}

/***
 * `printQuote` function
 ***/
function printQuote() {
	// Store random quote object in variable
	let randomQuoteObject = getRandomQuote();
	// Create HTML variable to store string to be printed to screen
	let HTML = `<p class="quote">${randomQuoteObject.quote}</p>`;
	HTML += `<p class="source">${randomQuoteObject.source}`;
	// Check for citation property in object
	if (randomQuoteObject.hasOwnProperty("citation")) {
		HTML += `<span class="citation">${randomQuoteObject.citation}</span>`;
	}
	// Check for year property in object
	if (randomQuoteObject.hasOwnProperty("year")) {
		HTML += `<span class="year">${randomQuoteObject.year}</span>`;
	}
	if (randomQuoteObject.hasOwnProperty("tags")) {
		HTML += `<span class="year">${randomQuoteObject.tags.join(", ")}</span>`;
	}
	HTML += `</p>`;
	// Change background to random color
	randomBackgroundColor();
	// Return complete string to be displayed on screen
	return (document.getElementById("quote-box").innerHTML = HTML);
}

// Function to randomize background color
// Function found at https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function randomBackgroundColor() {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	let bgColor = "rgb(" + x + "," + y + "," + z + ")";

	document.body.style.background = bgColor;
}

// Function to auto-refresh quotes on page
// inofrmation on setInterval() method found at https://www.w3schools.com/jsref/met_win_setinterval.asp
function autoRefresh() {
	setInterval(printQuote, 15000);
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById("load-quote")
	.addEventListener("click", printQuote, false);
autoRefresh();
