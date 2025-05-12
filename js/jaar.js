// Toon het huidige jaar in de footer
    // Haal het huidige jaar op
const currentYear = new Date().getFullYear();
    // Toont het huidige jaar als het element year wordt aangeroepen
document.getElementById("year").textContent = currentYear;