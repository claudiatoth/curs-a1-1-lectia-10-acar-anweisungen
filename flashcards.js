// ============================================
// FLASHCARDS - Lecția 10: Acar gibt Anweisungen
// Claudia Toth · A1.1 · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS / paranteze pentru emfază!
// ============================================

const flashcardsData = [
    // === 4 tipuri Vokalwechsel (4 carduri) ===
    { de: "du sprichst", ro: "tu vorbești · tipul e → i · infinitiv sprechen", audio: "audio/letters/voc-e-i.wav" },
    { de: "du liest", ro: "tu citești · tipul e → ie · infinitiv lesen", audio: "audio/letters/voc-e-ie.wav" },
    { de: "du fährst", ro: "tu conduci · tipul a → ä · infinitiv fahren", audio: "audio/letters/voc-a-ae.wav" },
    { de: "du läufst", ro: "tu alergi · tipul au → äu · infinitiv laufen", audio: "audio/letters/voc-au-aeu.wav" },

    // === 11 verbe tari frecvente (11 carduri) ===
    { de: "essen", ro: "a mânca · du isst · er/sie/es isst (e → i)", audio: "audio/letters/v-essen.wav" },
    { de: "geben", ro: "a da · du gibst · er/sie/es gibt (e → i)", audio: "audio/letters/v-geben.wav" },
    { de: "nehmen", ro: "a lua · du nimmst · er/sie/es nimmt (e → i, h dispare)", audio: "audio/letters/v-nehmen.wav" },
    { de: "sprechen", ro: "a vorbi · du sprichst · er/sie/es spricht (e → i)", audio: "audio/letters/v-sprechen.wav" },
    { de: "helfen", ro: "a ajuta · du hilfst · er/sie/es hilft (e → i)", audio: "audio/letters/v-helfen.wav" },
    { de: "lesen", ro: "a citi · du liest · er/sie/es liest (e → ie)", audio: "audio/letters/v-lesen.wav" },
    { de: "sehen", ro: "a vedea · du siehst · er/sie/es sieht (e → ie)", audio: "audio/letters/v-sehen.wav" },
    { de: "fahren", ro: "a conduce / a merge cu vehicul · du fährst · er fährt (a → ä)", audio: "audio/letters/v-fahren.wav" },
    { de: "schlafen", ro: "a dormi · du schläfst · er/sie/es schläft (a → ä)", audio: "audio/letters/v-schlafen.wav" },
    { de: "tragen", ro: "a purta / a căra · du trägst · er/sie/es trägt (a → ä)", audio: "audio/letters/v-tragen.wav" },
    { de: "laufen", ro: "a alerga / a merge pe jos · du läufst · er läuft (au → äu)", audio: "audio/letters/v-laufen.wav" },

    // === 8 imperativ du (8 carduri) ===
    { de: "Nimm!", ro: "Ia! · imperativ du de la nehmen · e → i păstrat", audio: "audio/letters/imp-nimm.wav" },
    { de: "Lies!", ro: "Citește! · imperativ du de la lesen · e → ie păstrat", audio: "audio/letters/imp-lies.wav" },
    { de: "Gib!", ro: "Dă! · imperativ du de la geben · e → i păstrat", audio: "audio/letters/imp-gib.wav" },
    { de: "Hilf!", ro: "Ajută! · imperativ du de la helfen · e → i păstrat", audio: "audio/letters/imp-hilf.wav" },
    { de: "Sprich!", ro: "Vorbește! · imperativ du de la sprechen · e → i păstrat", audio: "audio/letters/imp-sprich.wav" },
    { de: "Fahr!", ro: "Condu! · imperativ du de la fahren · a → ä NU se păstrează", audio: "audio/letters/imp-fahr.wav" },
    { de: "Iss!", ro: "Mănâncă! · imperativ du de la essen · e → i păstrat", audio: "audio/letters/imp-iss.wav" },
    { de: "Komm!", ro: "Vino! · imperativ du de la kommen · verb regulat", audio: "audio/letters/imp-komm.wav" },

    // === 5 imperativ ihr / Sie + sein (5 carduri) ===
    { de: "Nehmt!", ro: "Luați! · imperativ ihr (către un grup) · forma ihr fără pronume", audio: "audio/letters/imp-nehmt.wav" },
    { de: "Lesen Sie!", ro: "Citiți! · imperativ Sie (politicos) · infinitiv + Sie", audio: "audio/letters/imp-lesen-sie.wav" },
    { de: "Sei!", ro: "Fii! · imperativ du de la sein · NEREGULAT (Sei vorsichtig!)", audio: "audio/letters/imp-sei.wav" },
    { de: "Seid!", ro: "Fiți! · imperativ ihr de la sein · NEREGULAT (către un grup)", audio: "audio/letters/imp-seid.wav" },
    { de: "Seien Sie!", ro: "Fiți! · imperativ Sie de la sein · NEREGULAT (politicos)", audio: "audio/letters/imp-seien-sie.wav" },

    // === 4 imperativ verbe separabile (4 carduri) ===
    { de: "Steh auf!", ro: "Trezește-te / Ridică-te! · de la aufstehen · prefixul auf la final", audio: "audio/letters/sep-steh-auf.wav" },
    { de: "Ruf an!", ro: "Sună! · de la anrufen · prefixul an la final", audio: "audio/letters/sep-ruf-an.wav" },
    { de: "Mach zu!", ro: "Închide! · de la zumachen · prefixul zu la final", audio: "audio/letters/sep-mach-zu.wav" },
    { de: "Komm mit!", ro: "Vino cu mine / cu noi! · de la mitkommen · prefixul mit la final", audio: "audio/letters/sep-komm-mit.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (4 tipuri Vokalwechsel · 11 verbe tari · 8 imperativ du · 5 imperativ ihr/Sie + sein · 4 verbe separabile).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
