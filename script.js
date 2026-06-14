const quotes = [
    "Varje liten handling formar framtiden.",
    "Tålamod öppnar fler dörrar än stress.",
    "Små steg kan leda långt.",
    "Den som vågar fråga lär sig snabbare.",
    "Det du söker söker också dig.",
    "Ett leende kan förändra en dag.",
    "Lyckan hittar ofta den som inte jagar den.",

    "Det som tar tid blir ofta bättre.",
    "Du behöver inte förstå allt idag.",
    "Det finns styrka i att vänta.",
    "Det enkla är ofta det svåra.",
    "Det som växer långsamt får djupa rötter.",
    "En kopp te kan vara nog.",
    "Små glädjeämnen räknas också.",
    "Vardagen är större än den verkar.",
    "Du får vila innan du är färdig.",
    "Allt behöver inte ske idag.",
    "Vila är också en handling.",
    "Du får ta det lugnt utan att förtjäna det först.",
    "Mjukhet är inte svaghet.",
    "Var lika vänlig mot dig själv som mot andra.",
    "Tacksamhet gör livet större.",
    "Lägg märke till det som redan finns.",
    "Det finns mer framför dig än bakom dig.",
    "Små förändringar kan bli stora med tiden.",
    "Du behöver inte se hela vägen för att ta nästa steg.",
    "Ljuset kommer tillbaka, även efter långa vintrar.",
    "Du har klarat svåra dagar förut.",
    "Framtiden är inte färdigskriven.",
    "Det finns fler möjligheter än du ser just nu.",
    "Allt börjar med något litet.",
    "Ibland räcker det att fortsätta."
];

// 🥠 kaka-ID från URL
const params = new URLSearchParams(window.location.search);
const deviceId = params.get("id") || "kaka01";

// 📅 dagens datum
function getDate() {
    return new Date().toISOString().split("T")[0];
}

// 🔑 nycklar
function dailyKey() {
    return `${deviceId}-daily-${getDate()}`;
}

function firstKey() {
    return `${deviceId}-first`;
}

// 🎲 slumpa citat
function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// 🌿 hämta dagens citat (stabilt per kaka + dag)
function getDailyQuote() {
    const key = dailyKey();
    const saved = localStorage.getItem(key);

    if (saved) return saved;

    const quote = randomQuote();
    localStorage.setItem(key, quote);
    return quote;
}

// 🌱 första skanning-logik
function handleFirstScan() {
    const key = firstKey();
    const isFirst = !localStorage.getItem(key);

    if (isFirst) {
        localStorage.setItem(key, "seen");
        return true;
    }

    return false;
}

// 🌿 uppdatera visuellt
function updateQuote(quote) {
    const quoteEl = document.getElementById("quote");

    quoteEl.classList.remove("show");

    setTimeout(() => {
        quoteEl.textContent = quote;

        requestAnimationFrame(() => {
            setTimeout(() => {
                quoteEl.classList.add("show");
            }, 120);
        });

    }, 650);
}

// 🔁 byt citat manuellt
function newQuote() {
    const quote = randomQuote();
    localStorage.setItem(dailyKey(), quote);
    updateQuote(quote);
}

// 🌿 START
(function init() {
    const quote = getDailyQuote();

    // första skanning (framtida hook)
    handleFirstScan();

    updateQuote(quote);
})();
