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
    "Du behöver inte förstå allt för att fortsätta framåt.",
    "Det du gör idag formar något längre fram, även om du inte ser det än.",
    "Små förändringar är fortfarande förändringar.",
    "Du är redan mitt i något som håller på att bli.",
    "Det är okej att inte ha en plan som känns perfekt.",
    "Du behöver inte känna dig redo för att vara på väg.",
    "Det som känns litet nu kan växa sig stort senare.",
    "Du får ändra riktning om du behöver.",
    "Du behöver inte hinna ikapp något.",
    "Det finns inget rätt tempo du måste följa.",
    "Du kan börja där du är, inte där du tycker att du borde vara.",
    "Allt behöver inte vara klart för att vara på riktigt.",
    "Du får ta en sak i taget utan att det är för lite.",
    "Det är okej att inte se hela bilden än.",
    "Du behöver inte ha kontroll för att det ska gå bra.",
    "Det du fortsätter med räknas, även när det känns stilla.",
    "Du är inte sen, du är i rörelse.",
    "Det finns mer tid än känslan av brådska säger.",
    "Du får låta saker utvecklas långsamt.",
    "Du behöver inte pressa fram tydlighet.",
    "Det du lär dig nu syns kanske först senare.",
    "Du får vara i processen utan att skynda igenom den.",
    "Du behöver inte veta vart allt leder.",
    "Det är okej att vara mitt i något ofärdigt.",
    "Du gör mer än du tror, även när det inte känns så.",
    "Du behöver inte bevisa framsteg varje dag.",
    "Små steg är fortfarande steg framåt.",
    "Du får låta livet vara lite oklart ibland.",
    "Du behöver inte hinna ikapp någon annan version av dig själv.",
    "Det är okej att saker tar den tid de tar."
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
    "Du får vara här även när du inte känner dig helt okej.",
    "Du behöver inte bära allt på en gång.",
    "Du är fortfarande värdefull även när du tvivlar.",
    "Du får ta det i din egen takt.",
    "Du behöver inte ha alla svar just nu.",
    "Det är okej att vila i det som är svårt.",
    "Du är inte ensam i det du känner.",
    "Du behöver inte göra dig mindre för att passa in.",
    "Du är värd omtanke även när du har en tung dag.",
    "Du får börja om så många gånger du behöver.",
    "Du behöver inte vara stark hela tiden.",
    "Det du känner just nu kommer inte vara för alltid.",
    "Du är mer än det du går igenom.",
    "Du får finnas utan att prestera.",
    "Du behöver inte förklara allt du känner.",
    "Du är okej även när du inte känner dig okej.",
    "Du får ta emot stöd, inte bara ge det.",
    "Du behöver inte fixa dig själv just nu.",
    "Det är okej att inte ha kontroll.",
    "Du är inte dina tankar om dig själv.",
    "Du får vila i att det räcker att du är här.",
    "Du behöver inte vara redo för att fortsätta ändå.",
    "Du är inte för sen, du är inte efter.",
    "Du får låta saker få ta tid.",
    "Du behöver inte pressa dig själv igenom allt.",
    "Du är fortfarande du, även i det som skaver.",
    "Du får vara snäll mot dig själv idag också.",
    "Det är okej att bara ta nästa lilla steg.",
    "Du behöver inte känna dig trygg hela tiden för att vara trygg nog.",
    "Du är värd mjukhet, även från dig själv."
];
// ===============================
// 🪨 LUGNSTEN
// ===============================
const calmMorningQuotes = [
    "Du får börja mjukt idag.",
    "Det räcker att ta första steget.",
    "Du behöver inte ha bråttom.",
    "En ny dag behöver inte börja perfekt.",
    "Du får ta dagen som den kommer."
];
const calmDayQuotes = [
    "Du behöver inte prestera här.",
    "Det är okej att vara lite obekväm.",
    "Du får bara vara.",
    "Du behöver inte säga rätt saker.",
    "Det räcker att du är här.",
    "Du får ta det i din egen takt."
];
const calmEveningQuotes = [
    "Dagen är redan tillräcklig.",
    "Du kan släppa taget om resten.",
    "Du är klar för idag.",
    "Det som inte blev gjort får vänta.",
    "Du behöver inte bära med dig allt vidare.",
    "Låt dagen få vila nu."
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
// 📅 DAGLIGT SYSTEM
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
    localStorage.setItem(
        dailyKey(),
        quote
    );
    return quote;
}
// ===============================
// ✨ UI
// ===============================
function updateQuote(text) {
    const quote =
        document.getElementById("quote");
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
        updateQuote(
            getLullQuote()
        );
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
    const subtitle =
        document.getElementById("subtitle");
    const luckBtn =
        document.getElementById("luckButton");
    const lullBtn =
        document.getElementById("lullButton");
    if (isLugnsten) {
        document.body.classList.add(
            "lugnsten"
        );
        subtitle.textContent =
            "En liten trygghet i fickan";
        luckBtn.style.display = "none";
        lullBtn.style.display = "flex";
        updateQuote(
            getLullQuote()
        );
    } else if (isHjarta) {
        document.body.classList.add(
            "hjarta"
        );
        subtitle.textContent =
            "Några vänliga ord till dig själv";
        luckBtn.textContent =
            "Ett ord till";
        luckBtn.style.display = "block";
        lullBtn.style.display = "none";
        updateQuote(
            getDailyQuote()
        );
    } else {
        subtitle.textContent =
            "Ord för stunden";
        luckBtn.textContent =
            "Ett annat perspektiv";
        luckBtn.style.display = "block";
        lullBtn.style.display = "none";
        updateQuote(
            getDailyQuote()
        );
    }
});
