// ===============================
// 🔗 ID (NFC / kaka / sten / hjärta)
// ===============================
const params = new URLSearchParams(window.location.search);
const deviceId = params.get("id") || "lyckokaka01";

const isLugnsten = deviceId.startsWith("lugnsten");
const isHjarta = deviceId.startsWith("hjarta");


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
    "Det du gör nu spelar roll, även om det känns litet.",
    "Ibland är ett litet steg också ett framsteg.",
    "Det finns fler möjligheter än du ser just nu.",
    "Du behöver inte ha alla svar idag.",
    "Något gott kan fortfarande hända."
];


// ===============================
// ❤️ HJÄRTA
// ===============================
const heartQuotes = [
    "Du behöver inte förtjäna ditt värde.",
    "Du är mer än det du presterar.",
    "Du får vara stolt över små steg också.",
    "Ditt värde förändras inte av en dålig dag.",
    "Du behöver inte jämföra din väg med någon annans.",
    "Du är tillräcklig även när du tvivlar.",
    "Det finns saker hos dig som inte går att mäta.",
    "Du får vara mänsklig.",
    "Du behöver inte vara perfekt för att vara värdefull.",
    "Prata med dig själv som du skulle prata med någon du tycker om.",
    "Du bär på mer styrka än du tror.",
    "Det är okej att vara snäll mot dig själv.",
    "Du är inte summan av dina misstag.",
    "Du får ta plats.",
    "Ditt värde sitter inte i vad du åstadkommer.",
    "Du behöver inte bevisa något för att vara värdefull.",
    "Du får vila utan att förtjäna det först.",
    "Du är värd samma omtanke som du ger andra.",
    "Det räcker att vara du.",
    "Du behöver inte vara perfekt för att vara omtyckt."
];


// ===============================
// 🪨 LUGNSTEN
// ===============================
const calmCallQuotes = [
    "Du får börja mjukt idag.",
    "Du behöver inte ha bråttom in i den här stunden.",
    "Det räcker att du är här.",
    "Ta ett andetag i taget.",
    "Du behöver inte lösa hela dagen just nu.",
    "Börja där du står."
];

const calmSocialQuotes = [
    "Du behöver inte prestera här.",
    "Det är okej att vara lite obekväm.",
    "Du får bara vara.",
    "Du behöver inte säga rätt saker.",
    "Du får ta plats även när du känner dig osäker.",
    "Det räcker att du är du."
];

const calmResetQuotes = [
    "Dagen är redan tillräcklig.",
    "Du kan släppa taget om resten.",
    "Du behöver inte ta med allt vidare.",
    "Du är klar för idag.",
    "Låt det som varit få vila nu.",
    "Du behöver inte lösa något mer ikväll."
];


// ===============================
// 🔧 HELPERS
// ===============================
function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}


// ===============================
// 🪨 LUGNSTEN LOGIK
// ===============================
function getLullList() {
    const t = getTimeOfDay();

    if (t === "morning") return calmCallQuotes;
    if (t === "evening") return calmResetQuotes;

    return calmSocialQuotes;
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


// ===============================
// 🥠 + ❤️ DAGLIGT CITAT
// ===============================
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
// 🪨 LUGNSTEN
// ===============================
function getLullQuote() {
    return random(getLullList());
}


// ===============================
// ✨ UI
// ===============================
function updateQuote(text) {

    const el = document.getElementById("quote");

    el.classList.remove("show");

    setTimeout(() => {
        el.textContent = text;
        el.classList.add("show");
    }, 200);
}


// ===============================
// 🔁 KNAPP
// ===============================
function newQuote() {

    if (isLugnsten) {

        updateQuote(getLullQuote());

    } else {

        const quote = isHjarta
            ? random(heartQuotes)
            : random(wisdomQuotes);

        localStorage.setItem(
            dailyKey(),
            quote
        );

        updateQuote(quote);
    }
}


// ===============================
// 🚀 START
// ===============================
window.addEventListener("DOMContentLoaded", () => {

    const subtitle = document.getElementById("subtitle");
    const luckBtn = document.getElementById("luckButton");
    const lullBtn = document.getElementById("lullButton");

    if (isLugnsten) {

        document.body.classList.add("lugnsten");

        subtitle.textContent = "En liten trygghet i fickan";

        if (luckBtn) luckBtn.style.display = "none";
        if (lullBtn) lullBtn.style.display = "flex";

        updateQuote(getLullQuote());

    } else if (isHjarta) {

        subtitle.textContent = "Några vänliga ord till dig själv";

        if (luckBtn) luckBtn.style.display = "block";
        if (lullBtn) lullBtn.style.display = "none";

        updateQuote(getDailyQuote());

    } else {

        subtitle.textContent = "Ord för stunden";

        if (luckBtn) luckBtn.style.display = "block";
        if (lullBtn) lullBtn.style.display = "none";

        updateQuote(getDailyQuote());
    }
});
