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
    "Det du gör nu spelar roll, även om det känns litet.",
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
    "Det är okej att saker tar den tid de tar.",
    "Du behöver inte känna dig säker för att ta nästa steg.",
    "Det som växer syns inte alltid direkt.",
    "Ibland är riktningen viktigare än farten.",
    "Du får ändra dig utan att ha gjort fel.",
    "Det är okej att inte veta ännu.",
    "Det finns plats för både tålamod och framsteg.",
    "Det lilla du gör idag räknas också.",
    "Du behöver inte skynda för att komma fram.",
    "Allt utvecklas inte i samma takt.",
    "Det är inte för sent att börja där du är.",
    "Du får vara nybörjare så länge du behöver.",
    "Det som känns stilla kan ändå vara rörelse.",
    "Du behöver inte välja hela vägen idag.",
    "Vissa svar kommer först när man fortsätter.",
    "Du får låta saker mogna i sin egen takt.",
    "Det är okej att inte känna sig färdig.",
    "Du behöver inte bära morgondagen idag.",
    "Det finns fler möjligheter än du ser just nu.",
    "Små justeringar kan förändra mycket över tid.",
    "Du får fortsätta även utan tydliga bevis.",
    "Det är okej att växa långsamt.",
    "Du behöver inte veta hur allt ska gå.",
    "Det finns inget krav på perfekta beslut.",
    "Du får följa det som känns sant för dig.",
    "Det är inte fel att ta omvägar ibland.",
    "Det som känns svårt nu behöver inte kännas så för alltid.",
    "Du behöver inte jämföra din väg med någon annans.",
    "Vissa saker blir tydligare med tiden.",
    "Du får vila utan att tappa riktningen.",
    "Det finns värde även i de små framstegen.",
    "Du behöver inte förstå allt för att lära dig något.",
    "Det är okej att låta framtiden vara lite öppen.",
    "Du får ta plats även när du fortfarande lär dig.",
    "Det som är viktigt får ibland ta tid.",
    "Du behöver inte vara längst fram för att vara på väg.",
    "Det är okej att låta saker bli till steg för steg.",
    "Du får lita på att allt inte måste avgöras idag.",
    "Det som väntar på dig behöver inte jagas.",
    "Du behöver inte känna dig färdig för att fortsätta.",
    "Det finns styrka i att fortsätta lugnt.",
    "Du får vara stolt över sådant som ingen annan ser.",
    "Det är okej att låta vissa frågor vara obesvarade ett tag.",
    "Du behöver inte pressa fram nästa kapitel.",
    "Det som känns osäkert idag kan kännas självklart senare.",
    "Du får ge saker en chans att utvecklas.",
    "Det är okej att bygga något långsamt.",
    "Du behöver inte ha bråttom mot framtiden.",
    "Det finns mer än ett sätt att komma fram.",
    "Du får fortsätta i ditt eget tempo.",
    "Det är okej att låta vägen visa sig efter hand."
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
    "Det är okej att vara snäll mot dig själv.",
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
    "Du är värd mjukhet, även från dig själv.",
    "Du behöver inte vara allt för alla.",
    "Det är okej att välja dig själv ibland.",
    "Du får ta upp plats i ditt eget liv.",
    "Du behöver inte bevisa att du är värdefull.",
    "Du får vara stolt över dig själv även för små saker.",
    "Det är okej att inte orka hela vägen idag.",
    "Du behöver inte göra mer för att vara tillräcklig.",
    "Du får lita på att du räcker som du är.",
    "Det är okej att inte vara perfekt på att vara människa.",
    "Du behöver inte bära andras förväntningar.",
    "Du får säga nej utan att känna skuld.",
    "Det är okej att sätta gränser.",
    "Du behöver inte förklara alla dina val.",
    "Du får vara mjuk utan att vara svag.",
    "Det är okej att behöva återhämtning.",
    "Du behöver inte jämföra din resa med någon annans.",
    "Du får vara viktig i ditt eget liv.",
    "Det är okej att inte alltid vara produktiv.",
    "Du behöver inte göra dig förtjänt av vila.",
    "Du får ta hand om dig själv först ibland.",
    "Det är okej att inte vara den som löser allt.",
    "Du behöver inte ha svar på allt.",
    "Du får känna det du känner utan att döma dig själv.",
    "Det är okej att vara känslig.",
    "Du behöver inte vara starkare än situationen kräver.",
    "Du får göra misstag utan att förlora ditt värde.",
    "Det är okej att vara under utveckling.",
    "Du behöver inte vara färdig för att vara värdefull.",
    "Du får låta dig själv växa långsamt.",
    "Det är okej att ta omvägar.",
    "Du behöver inte vara bättre än någon annan.",
    "Du får vara precis där du är just nu.",
    "Det är okej att ha dagar som känns tyngre.",
    "Du behöver inte bära allt själv.",
    "Du får ta emot omtanke utan att förtjäna den först.",
    "Det är okej att vara snäll mot dig själv även när det går dåligt.",
    "Du behöver inte vara den bästa versionen av dig själv varje dag.",
    "Du får vara mänsklig utan ursäkt.",
    "Det är okej att välja lugn framför prestation.",
    "Du behöver inte förminska dig själv för att andra ska få plats.",
    "Du får tro gott om dig själv.",
    "Det är okej att känna stolthet över vem du är.",
    "Du behöver inte vara mer än du redan är just nu.",
    "Du får låta dina behov räknas också.",
    "Det är okej att inte alltid vara tillgänglig.",
    "Du behöver inte ha en perfekt dag för att vara okej.",
    "Du får vara vänlig mot dig själv även när du tvivlar.",
    "Det är okej att börja om.",
    "Du behöver inte göra allt rätt för att vara värd kärlek.",
    "Du får vara dig själv även när det känns ovant.",
];

// ===============================
// 🪨 LUGNSTEN
// ===============================
const calmMorningQuotes = [
    "Du får börja mjukt idag.",
    "Det räcker att ta första steget.",
    "Du behöver inte ha bråttom.",
    "En ny dag behöver inte börja perfekt.",
    "Du får ta dagen som den kommer.",
    "Du behöver inte starta dagen snabbt för att den ska bli bra.",
    "Det räcker att du har börjat, inte hur du började.",
    "Du får vakna i din egen takt idag.",
    "Det är okej att fortfarande vara lite trött.",
    "Du behöver inte vara redo för att börja ändå.",
    "Ingen brådska behövs här.",
    "Du får ta första steget utan att veta resten.",
    "Dagen behöver inte vara perfekt för att vara okej.",
    "Du behöver inte fylla den här dagen direkt.",
    "Det är okej att låta morgonen vara mjuk.",
    "Du får komma ikapp dig själv i lugn takt.",
    "Du behöver inte göra allt som väntar idag.",
    "Det räcker att du är på väg in i dagen.",
    "Du får börja långsamt och ändå vara framåt.",
    "Du behöver inte prestera bara för att dagen har börjat.",
    "Du får landa innan du gör något alls.",
    "Det är okej att inte känna sig helt igång än.",
    "Du behöver inte ha energi för att få börja.",
    "Du får ta dagen steg för steg från början.",
    "Du är inte sen in i din egen dag.",
    "Det finns inget rätt sätt att starta på.",
    "Du får mjukstarta utan att det betyder något negativt.",
    "Du behöver inte hinna ikapp något på morgonen.",
    "Det räcker att du öppnar dagen, inte att du löser den.",
    "Du får låta morgonen vara stilla en stund till.",
    "Du behöver inte veta hur hela dagen ska bli.",
    "Du får börja utan att känna dig klar.",
    "Det är okej att vara långsam in i allt som väntar.",
    "Du behöver inte vara “igång” för att vara okej.",
    "Du får låta dagen komma till dig."
];

const calmDayQuotes = [
    "Du behöver inte prestera här.",
    "Det är okej att vara lite obekväm.",
    "Du får bara vara.",
    "Du behöver inte säga rätt saker.",
    "Det räcker att du är här.",
    "Du får ta det i din egen takt.",
    "Du behöver inte prestera för att få finnas här.",
    "Det är okej att inte vara på topp.",
    "Du får ta det i din egen takt, även mitt på dagen.",
    "Du behöver inte säga rätt saker hela tiden.",
    "Du får vara lite obekväm och ändå vara okej.",
    "Du behöver inte ha koll på allt som händer.",
    "Det räcker att du gör så gott du kan just nu.",
    "Du behöver inte anpassa dig mer än du orkar.",
    "Du får pausa även när dagen pågår.",
    "Det är okej att inte vara social hela tiden.",
    "Du behöver inte fylla alla tystnader.",
    "Du får vara här utan att prestera något alls.",
    "Du behöver inte känna dig stabil för att fortsätta.",
    "Det är okej att inte veta exakt vad du ska göra.",
    "Du får ta en sak i taget, även när allt rör sig.",
    "Du behöver inte vara “på” hela tiden.",
    "Det är okej att dra sig tillbaka lite i tanken.",
    "Du behöver inte leverera något för att vara värdefull.",
    "Du får ta en paus utan att förklara den.",
    "Det är okej att känna sig lite överväldigad.",
    "Du behöver inte orka med allt som händer runt dig.",
    "Du får göra saker enklare för dig själv.",
    "Du behöver inte vara tillgänglig hela tiden.",
    "Det räcker att du tar dig igenom stunden.",
    "Du får vara lite långsam även mitt i dagen.",
    "Du behöver inte jämföra dig med andra.",
    "Det är okej att bara observera utan att delta.",
    "Du får vara tyst om du behöver det.",
    "Du behöver inte fixa något just nu.",
    "Du är fortfarande okej även om dagen känns rörig."
];

const calmEveningQuotes = [
    "Dagen är redan tillräcklig.",
    "Du kan släppa taget om resten.",
    "Du är klar för idag.",
    "Det som inte blev gjort får vänta.",
    "Du behöver inte bära med dig allt vidare.",
    "Låt dagen få vila nu.",
    "Du behöver inte lösa något mer idag.",
    "Det som blev gjort är tillräckligt för idag.",
    "Du får släppa taget om resten nu.",
    "Dagen behöver inte fortsätta i dina tankar.",
    "Du behöver inte bära med dig allt vidare in i kvällen.",
    "Det är okej att låta dagen vara ofärdig.",
    "Du får vila i att du har gjort vad du kunnat.",
    "Du behöver inte tänka igenom dagen en gång till.",
    "Det som inte hanns med kan vänta.",
    "Du får låta kvällen vara mjuk och stilla.",
    "Du behöver inte rätta till något i efterhand.",
    "Det är okej att inte utvärdera dig själv idag.",
    "Du får stänga ner dagen utan att gå igenom den igen.",
    "Du behöver inte hitta svar på allt ikväll.",
    "Du får låta tankarna sakta ner.",
    "Det är okej att inte känna sig helt klar.",
    "Du behöver inte förbättra dagen i efterhand.",
    "Du får vara färdig för idag, precis som det blev.",
    "Det räcker att dagen har passerat.",
    "Du behöver inte ta med dig känslan vidare.",
    "Du får låta kvällen vara en paus från tankarna.",
    "Det är okej att släppa det som skaver.",
    "Du behöver inte analysera det som varit.",
    "Du får vila från dig själv en stund.",
    "Det är okej att bara låta kvällen vara tyst.",
    "Du behöver inte fixa något innan du somnar.",
    "Du får vara klar utan att känna dig klar.",
    "Det räcker att du är här i slutet av dagen.",
    "Du behöver inte förbereda morgondagen nu.",
    "Du får avsluta dagen utan eftertanke."
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
// 🔧 HELPERS (ALT 3)
// ===============================
function random(list, biasList = null) {
    // 70% huvudlista, 20% bias, 10% övergång
    const r = Math.random();

    if (biasList && r > 0.7 && r <= 0.9 && biasList.length) {
        return biasList[Math.floor(Math.random() * biasList.length)];
    }

    if (biasList && r > 0.9 && calmTransitionQuotes.length) {
        return calmTransitionQuotes[Math.floor(Math.random() * calmTransitionQuotes.length)];
    }

    return list[Math.floor(Math.random() * list.length)];
}

// liten “mjuk övergångslista”
const calmTransitionQuotes = [
    "Du är mitt i dagen, och det räcker.",
    "Allt behöver inte kännas tydligt just nu.",
    "Du får bara fortsätta mjukt.",
    "Det är okej att vara mellan saker.",
    "Du behöver inte skynda mellan lägen."
];

// ===============================
// 🪨 LUGNSTEN
// ===============================
function getLullQuote() {
    const time = getTimeOfDay();

    if (time === "morning") {
        return random(calmMorningQuotes, calmDayQuotes);
    }

    if (time === "evening") {
        return random(calmEveningQuotes, calmDayQuotes);
    }

    return random(calmDayQuotes, calmMorningQuotes);
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
    if (saved) return saved;

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
        updateQuote(random(heartQuotes));
    } else {
        updateQuote(random(wisdomQuotes));
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

        luckBtn.style.display = "none";
        lullBtn.style.display = "flex";

        updateQuote(getLullQuote());
    }

    else if (isHjarta) {
        document.body.classList.add("hjarta");
        subtitle.textContent = "Till dig själv";

        luckBtn.textContent = "En vänlig tanke till";
        lullBtn.style.display = "none";

        updateQuote(getDailyQuote());
    }

    else {
        subtitle.textContent = "En vänlig påminnelse";

        luckBtn.textContent = "Ett annat perspektiv";
        lullBtn.style.display = "none";

        updateQuote(getDailyQuote());
    }
});
