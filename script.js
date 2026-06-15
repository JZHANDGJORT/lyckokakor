// ===============================
// 🔗 ID
// ===============================
const params = new URLSearchParams(window.location.search);
const deviceId = params.get("id") || "lyckokaka01";

const isLugnsten = deviceId.startsWith("lugnsten");
const isHjarta = deviceId.startsWith("hjarta");


// ===============================
// 🥠 LYCKOKAKA
// ===============================
const wisdomQuotes = [
    "Varje liten handling formar framtiden.",
    "Små steg kan leda långt.",
    "Du behöver inte förstå allt idag.",
    "Små glädjeämnen räknas också.",
    "Framtiden är inte färdigskriven.",
    "Du är redan på väg.",
    "Det är okej att inte veta än.",
    "Allt börjar med något litet.",
    "Du behöver inte se hela vägen för att ta nästa steg.",
    "Ljuset kommer tillbaka, även efter långa vintrar.",
    "Det du gör nu spelar roll, även om det känns litet."
];


// ===============================
// ❤️ HJÄRTA
// ===============================
const heartQuotes = [
    "Du behöver inte förtjäna ditt värde.",
    "Du är mer än det du presterar.",
    "Ditt värde förändras inte av en dålig dag.",
    "Du får vara mänsklig.",
    "Du får ta plats.",
    "Du är inte summan av dina misstag.",
    "Du är värd samma omtanke som du ger andra.",
    "Det räcker att vara du.",
    "Du behöver inte vara perfekt för att vara värdefull.",
    "Det är okej att vara snäll mot dig själv."
];


// ===============================
// 🪨 LUGNSTEN
// ===============================
const calmMorningQuotes = [
    "Du får börja mjukt idag.",
    "Det räcker att ta första steget.",
    "Du behöver inte ha bråttom."
];

const calmDayQuotes = [
    "Du behöver inte prestera här.",
    "Det är okej att vara lite obekväm.",
    "Du får bara vara."
];

const calmEveningQuotes = [
    "Dagen är redan tillräcklig.",
    "Du kan släppa taget om resten.",
    "Du är klar för idag."
];


// ===============================
// ⏰ DYGN
// ===============================
function getTimeOfDay() {
    const hour = new Date().getHours();

    if (hour < 10) return "morning";
    if (hour < 18) return "day";
    return "evening";
}


// ===============================
// 🔧 HELPERS
// ===============================
function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}


// ===============================
// 🪨 LUGNSTEN
// ===============================
function getLullQuote() {

    const time = getTimeOfDay();

    if (time === "morning") {
        return random(calmMorningQuotes);
    }

    if (time === "evening") {
        return random(calmEveningQuotes);
    }

    return random(calmDayQuotes);
}


// ===============================
// 📅 DAGLIGT
// ===============================
function getDate() {
    return new Date().toISOString().split("T")[0];
}

function dailyKey() {
    return `${deviceId}-${getDate()}`;
}

function getDailyQuote() {

    const saved = localStorage.getItem(dailyKey());

    if (saved) {
        return saved;
    }

    let quote;

    if (isHjarta) {
        quote = random(heartQuotes);
    } else {
        quote = random(wisdomQuotes);
    }

    localStorage.setItem(dailyKey(), quote);

    return quote;
}


// ===============================
// ✨ UI
// ===============================
function updateQuote(text) {

    const quote = document.getElementById("quote");

    quote.classList.remove("show");

    setTimeout(() => {
        quote.textContent = text;
        quote.classList.add("show");
    }, 200);
}


// ===============================
// 🔁 KNAPP
// ===============================
function newQuote() {

    if (isLugnsten) {

        updateQuote(getLullQuote());

    } else if (isHjarta) {

        updateQuote(
            random(heartQuotes)
        );

    } else {

        updateQuote(
            random(wisdomQuotes)
        );
    }
}


// ===============================
// 🚀 START
// ===============================
window.addEventListener("DOMContentLoaded", () => {

    const subtitle = document.getElementById("subtitle");

    const luckBtn =
        document.getElementById("luckButton");

    const lullBtn =
        document.getElementById("lullButton");

    if (isLugnsten) {

        document.body.classList.add("lugnsten");

        subtitle.textContent =
            "En liten trygghet i fickan";

        luckBtn.style.display = "none";
        lullBtn.style.display = "flex";

        updateQuote(getLullQuote());

    } else if (isHjarta) {

        document.body.classList.add("hjarta");

        subtitle.textContent =
            "Några vänliga ord till dig själv";

        luckBtn.style.display = "block";
        lullBtn.style.display = "none";

        updateQuote(getDailyQuote());

    } else {

        subtitle.textContent =
            "Ord för stunden";

        luckBtn.style.display = "block";
        lullBtn.style.display = "none";

        updateQuote(getDailyQuote());
    }
});
