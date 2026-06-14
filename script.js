// ===============================
// 🔗 ID
// ===============================
const params = new URLSearchParams(window.location.search);
const deviceId = params.get("id") || "lyckokaka01";


// ===============================
// ⏰ TID PÅ DYGNET
// ===============================
function getTimeOfDay() {
    const hour = new Date().getHours();

    if (hour < 10) return "morning";
    if (hour < 18) return "day";
    return "evening";
}


// ===============================
// 🥠 LYCKOKAKA (perspektiv)
// ===============================
const wisdomQuotes = [
    "Varje liten handling formar framtiden.",
    "Tålamod öppnar fler dörrar än stress.",
    "Små steg kan leda långt.",
    "Det som växer långsamt får djupa rötter.",
    "Du behöver inte förstå allt idag.",
    "Vardagen är större än den verkar.",
    "Små glädjeämnen räknas också.",
    "Något gott kan fortfarande hända idag.",
    "Framtiden är inte färdigskriven.",
    "Du behöver inte se hela vägen för att ta nästa steg.",
    "Ljuset kommer tillbaka, även efter långa vintrar.",
    "Allt börjar med något litet."
];


// ===============================
// 🪨 LUGNSTEN (sorterad i känslotyper)
// ===============================

// 🌿 CALM / CALL (mjuk riktning, start, närvaro)
const calmCallQuotes = [
    "En ny dag. Du behöver inte ha bråttom in i den.",
    "Börja mjukt.",
    "Det räcker att ta första steget.",
    "Du behöver inte lösa hela dagen nu.",
    "Du får vara här utan att göra något mer."
];

// 🤝 SOCIAL (prestationsoro, relationer, obekvämhet)
const calmSocialQuotes = [
    "Du behöver inte prestera här.",
    "Du får ta det i din egen takt.",
    "Du behöver inte säga rätt saker.",
    "Det räcker att du är här.",
    "Du behöver inte vara på ett visst sätt."
];

// 🪨 RESET (kväll, nedvarvning, släppa dagen)
const calmResetQuotes = [
    "Dagen är redan tillräcklig.",
    "Du behöver inte lösa något mer idag.",
    "Låt det som varit få vila nu.",
    "Du får släppa taget om resten.",
    "Du är klar för idag, även om allt inte blev klart.",
    "Det räcker att dagen får vara som den var."
];


// ===============================
// 📊 RELATION (Lugnsten)
// ===============================
function getVisitCount() {
    const key = `${deviceId}-visits`;
    let count = localStorage.getItem(key);

    count = count ? parseInt(count) : 0;
    count++;

    localStorage.setItem(key, count);
    return count;
}


// ===============================
// 🎯 VÄLJ AKTIVT INNEHÅLL
// ===============================
let activeQuotes = [];
let subtitleText = "";

// Lugnsten-logik
if (deviceId.startsWith("lugnsten")) {

    const timeOfDay = getTimeOfDay();
    const visitCount = getVisitCount();

    // välj “känslotyp”
    if (timeOfDay === "morning") {
        activeQuotes = calmCallQuotes;
    } else if (timeOfDay === "evening") {
        activeQuotes = calmResetQuotes;
    } else {
        activeQuotes = calmSocialQuotes;
    }

    // stabil identitet (ingen “relationstext” längre)
    subtitleText = "En liten trygghet i fickan";

} else {

    activeQuotes = wisdomQuotes;
    subtitleText = "Ord för stunden";
}


// ===============================
// 📅 DAGLIGT SYSTEM
// ===============================
function getDate() {
    return new Date().toISOString().split("T")[0];
}

function dailyKey() {
    return `${deviceId}-daily-${getDate()}`;
}

function randomQuote() {
    return activeQuotes[
        Math.floor(Math.random() * activeQuotes.length)
    ];
}

function getDailyQuote() {
    const key = dailyKey();
    const saved = localStorage.getItem(key);

    if (saved) return saved;

    const quote = randomQuote();
    localStorage.setItem(key, quote);

    return quote;
}


// ===============================
// ✨ UI
// ===============================
function updateQuote(quote) {
    const quoteEl = document.getElementById("quote");

    quoteEl.classList.remove("show");

    setTimeout(() => {
        quoteEl.textContent = quote;
        quoteEl.classList.add("show");
    }, 300);
}

function newQuote() {
    const quote = randomQuote();
    localStorage.setItem(dailyKey(), quote);
    updateQuote(quote);
}


// ===============================
// 🚀 START
// ===============================
window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("subtitle").textContent = subtitleText;

    updateQuote(getDailyQuote());

});
