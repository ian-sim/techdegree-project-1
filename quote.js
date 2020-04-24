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
	},
	{
		quote: "No one can make you feel inferior without your consent.",
		source: "Eleanor Roosevelt",
		citation: "This is My Story",
	},
	{
		quote: "Always forgive your enemies; nothing annoys them so much.",
		source: "Oscar Wilde",
	},
	{
		quote:
			"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
		source: "Martin Luther King Jr.",
		citation: "A Testament of Hope: The Essential Writings and Speeches",
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

// Create function to select random array indice
function selectRandom(arrLength) {
	return Math.floor(Math.random() * arrLength);
}

// Create function to print quote to the screen
function print(array) {
	let outputDiv = document.getElementById("quote");
	let quote = ``;
	let randomQuote = array[selectRandom(array.length)];
	quote += `<h1>${randomQuote.quote}</h1>`;
	quote += `<h2> - ${randomQuote.source}</h2>`;
	if (randomQuote.hasOwnProperty("citation") === true) {
		quote += `<h4>${randomQuote.citation}</h4>`;
	}
	outputDiv.innerHTML = quote;
}

print(quotes);
