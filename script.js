const quotes = [
  'In a pure function, whenever you call it with the same parameters it will always produce the same outcome',
  'An object is defined by having an internal state',
  'In pure functional programming there is no such thing as state, everything is pure functions',
  'It wouldn\'t give you a compile time type error in javascript because it isn\'t a statically typed language',
  'The DOM is a tree. Recursion is often a good way to work with trees',
  'Changing something in a loop is the equivalent of returning something in recursion',
  'A function without an infinite loop returns in finite time'
];

const quote = document.getElementById("quote");
const input = document.getElementById("typed-value");
const start = document.getElementById("start");
const message = document.getElementById("message");

let wordQueue; 
let quoteText;
let highlightPosition;
let startTime;

function startGame() {
console.log("game started!");

reset();

const quoteIndex = Math.floor(Math.random() * quotes.length);
const quoteText = quotes[quoteIndex];

wordQueue = quoteText.split(' ');

quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');

highlightPosition = 0;
quote.childNodes[highlightPosition].className = "highlight";

startTime = new Date().getTime();

}

function checkInput() {
const currentWord = wordQueue[0].replaceAll(".", "").replaceAll(",", "");
const typedValue = input.value.trim();

if (currentWord != typedValue) {
  input.className = currentWord.startsWith(typedValue)? "" : "error";
  return;
}
wordQueue.shift();//shift removes 0th element from array
input.value = "";

if (wordQueue.length === 0) {
  gameOver();
  return;
}

quote.childNodes[highlightPosition].className = "";
highlightPosition++;
quote.childNodes[highlightPosition].className = "highlight";
} 
function gameOver() {
const elapsedTime = new Date().getTime() - startTime;
message.innerHTML = 
  `<span class="congratulations">Congratulations!</span><br>
  <span class="congratulations">You finished in ${elapsedTime / 1000} seconds.</span>`;
button.textContent="Try Again";
}

start.addEventListener("click", startGame);
input.addEventListener("input", checkInput);

function reset() {
  message.innerHTML = "";
}