const quotes = [
    "Varje liten handling formar framtiden.",
    "Tålamod öppnar fler dörrar än stress.",
    "Små steg kan leda långt.",
    "Den som vågar fråga lär sig snabbare.",
    "Det du söker söker också dig.",
    "Ett leende kan förändra en dag.",
    "Lyckan hittar ofta den som inte jagar den."
];

function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[random];
}

newQuote();
