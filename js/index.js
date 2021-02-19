let quotes = [
    "hello - patrick",
    "America great again - trump jr",
    "human rights - gutteres",
    "nuclear strike - North korea",
    "babushka - russian seer"
];
let newQuote = () => {
    let _randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("displayQuote").innerHTML = quotes[_randomNum];
}