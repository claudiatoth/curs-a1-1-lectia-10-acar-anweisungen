// ============================================
// EXERCIȚII - Lecția 10: Acar gibt Anweisungen
// Claudia Toth · A1.1 · 5 exerciții (toate text inputs)
// Sursă DF: 29/29-Z1/30/30-Z1/30-Z2 (Starke Verben), 124/125/129 (Imperativ), 51-Z3
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Conjugare verbe tari (Vokalwechsel la du / er-sie-es)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Mihai ____ den Bauplan. (lesen)', translation: 'Mihai citește planul de construcție.', correct: 'liest', accept: ['liest'] },
    { id: 'b', sentence: 'Acar, ____ du den LKW zur Halle? (fahren)', translation: 'Acar, conduci camionul la hală?', correct: 'fährst', accept: ['fährst', 'faehrst'] },
    { id: 'c', sentence: 'Carolina ____ schwere Steine. (tragen)', translation: 'Carolina cară pietre grele.', correct: 'trägt', accept: ['trägt', 'traegt'] },
    { id: 'd', sentence: 'Wer ____ mir hier? (helfen)', translation: 'Cine mă ajută aici?', correct: 'hilft', accept: ['hilft'] },
    { id: 'e', sentence: 'Du ____ zu schnell, Mihai! (sprechen)', translation: 'Vorbești prea repede, Mihai!', correct: 'sprichst', accept: ['sprichst'] },
    { id: 'f', sentence: 'Andreea ____ ein Buch über Pädagogik. (lesen)', translation: 'Andreea citește o carte despre pedagogie.', correct: 'liest', accept: ['liest'] },
    { id: 'g', sentence: '____ du gut, Mihai? (schlafen)', translation: 'Dormi bine, Mihai?', correct: 'Schläfst', accept: ['schläfst', 'schlaefst'] },
    { id: 'h', sentence: 'Acar ____ den Hammer. (nehmen)', translation: 'Acar ia ciocanul.', correct: 'nimmt', accept: ['nimmt'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔨 Completează cu forma corectă a verbului tare.</strong><br>
            Atenție la Vokalwechsel: doar <strong>du</strong> și <strong>er/sie/es</strong> schimbă vocala (e→i, e→ie, a→ä, au→äu).<br>
            <em>💡 Scrie doar forma verbului.</em>
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex1-${item.id}" placeholder="forma verbului...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Capcana persoanei (ich/wir/ihr/sie NU schimbă vocala)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Ich ____ morgen nach Berlin. (fahren)', translation: 'Eu merg mâine la Berlin.', correct: 'fahre', accept: ['fahre'] },
    { id: 'b', sentence: 'Wir ____ den Bauplan zusammen. (lesen)', translation: 'Noi citim planul împreună.', correct: 'lesen', accept: ['lesen'] },
    { id: 'c', sentence: 'Ihr ____ zu schnell, Leute! (sprechen)', translation: 'Vorbiți prea repede, oameni buni!', correct: 'sprecht', accept: ['sprecht'] },
    { id: 'd', sentence: 'Die Kollegen ____ in der Pause. (schlafen)', translation: 'Colegii dorm în pauză.', correct: 'schlafen', accept: ['schlafen'] },
    { id: 'e', sentence: 'Du ____ den Plan, Mihai. (lesen)', translation: 'Tu citești planul, Mihai.', correct: 'liest', accept: ['liest'] },
    { id: 'f', sentence: 'Acar ____ Carolina mit den Steinen. (helfen)', translation: 'Acar o ajută pe Carolina cu pietrele.', correct: 'hilft', accept: ['hilft'] },
    { id: 'g', sentence: 'Ich ____ den großen Hammer. (nehmen)', translation: 'Eu iau ciocanul cel mare.', correct: 'nehme', accept: ['nehme'] },
    { id: 'h', sentence: 'Mihai ____ schwere Steine zur Halle. (tragen)', translation: 'Mihai cară pietre grele la hală.', correct: 'trägt', accept: ['trägt', 'traegt'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🪤 Capcana persoanei: completează corect.</strong><br>
            Reține: vocala se schimbă <strong>numai la du și er/sie/es</strong>. La ich, wir, ihr, sie/Sie rămâne ca în infinitiv!<br>
            <em>💡 ich fahre (NU fähre!), wir lesen, ihr sprecht.</em>
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex2-${item.id}" placeholder="forma verbului...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Formează Imperativul du din infinitiv
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'nehmen → ____ den Hammer!', translation: 'Ia ciocanul!', correct: 'Nimm', accept: ['nimm'] },
    { id: 'b', sentence: 'lesen → ____ den Plan!', translation: 'Citește planul!', correct: 'Lies', accept: ['lies'] },
    { id: 'c', sentence: 'geben → ____ mir den Schlüssel!', translation: 'Dă-mi cheia!', correct: 'Gib', accept: ['gib'] },
    { id: 'd', sentence: 'helfen → ____ Carolina!', translation: 'Ajut-o pe Carolina!', correct: 'Hilf', accept: ['hilf'] },
    { id: 'e', sentence: 'sprechen → ____ langsam!', translation: 'Vorbește rar!', correct: 'Sprich', accept: ['sprich'] },
    { id: 'f', sentence: 'fahren → ____ den LKW!', translation: 'Condu camionul!', correct: 'Fahr', accept: ['fahr', 'fahre'] },
    { id: 'g', sentence: 'essen → ____ etwas, Mihai!', translation: 'Mănâncă ceva, Mihai!', correct: 'Iss', accept: ['iss'] },
    { id: 'h', sentence: 'arbeiten → ____ schnell!', translation: 'Lucrează repede!', correct: 'Arbeite', accept: ['arbeite'] },
    { id: 'i', sentence: 'kommen → ____ her!', translation: 'Vino aici!', correct: 'Komm', accept: ['komm', 'komme'] },
    { id: 'j', sentence: 'sein → ____ vorsichtig!', translation: 'Fii atent!', correct: 'Sei', accept: ['sei'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📣 Formează Imperativul pentru „du" (o singură persoană).</strong><br>
            Verbele e→i / e→ie PĂSTREAZĂ schimbarea (Nimm! Lies! Gib! Hilf! Sprich!). Verbele a→ä NU (Fahr!). sein → Sei!<br>
            <em>💡 Scrie doar forma de imperativ (cu sau fără semnul exclamării).</em>
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="imperativ du...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Imperativ transformare du → ihr / Sie
// ============================================
const ex4Data = [
    { id: 'a', sentence: '(du) Nimm den Hammer! → (ihr) ____ den Hammer!', translation: 'Luați ciocanul! (către un grup)', correct: 'Nehmt', accept: ['nehmt'] },
    { id: 'b', sentence: '(du) Lies den Plan! → (Sie) ____ den Plan!', translation: 'Citiți planul! (politicos)', correct: 'Lesen Sie', accept: ['lesen sie'] },
    { id: 'c', sentence: '(du) Hilf Mihai! → (ihr) ____ Mihai!', translation: 'Ajutați-l pe Mihai! (către un grup)', correct: 'Helft', accept: ['helft'] },
    { id: 'd', sentence: '(du) Sei vorsichtig! → (Sie) ____ vorsichtig!', translation: 'Fiți atent! (politicos)', correct: 'Seien Sie', accept: ['seien sie'] },
    { id: 'e', sentence: '(du) Fahr langsam! → (Sie) ____ langsam!', translation: 'Conduceți încet! (politicos)', correct: 'Fahren Sie', accept: ['fahren sie'] },
    { id: 'f', sentence: '(du) Steh auf! → (ihr) ____ auf!', translation: 'Ridicați-vă! (către un grup)', correct: 'Steht', accept: ['steht'] },
    { id: 'g', sentence: '(du) Komm mit! → (Sie) ____ Sie mit!', translation: 'Veniți cu noi! (politicos)', correct: 'Kommen', accept: ['kommen'] },
    { id: 'h', sentence: '(du) Arbeite schnell! → (ihr) ____ schnell!', translation: 'Lucrați repede! (către un grup)', correct: 'Arbeitet', accept: ['arbeitet'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>👥 Acar dă aceeași comandă altfel: transformă du → ihr (grup) sau Sie (politicos).</strong><br>
            ihr = forma „ihr" fără pronume (Nehmt!). Sie = infinitiv + Sie (Lesen Sie!). sein → Seid! / Seien Sie!<br>
            <em>💡 La forma Sie scrie ambele cuvinte (ex: Lesen Sie).</em>
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="forma cerută...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Lückentext — Acar pe șantier (mix verbe tari + imperativ)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Acar: Guten Morgen! Mihai, ____ den Hammer! (nehmen — imperativ du)', translation: 'Bună dimineața! Mihai, ia ciocanul!', correct: 'Nimm', accept: ['nimm'] },
    { id: 'b', sentence: 'Acar: Carolina, ____ den Bauplan! (lesen — imperativ du)', translation: 'Carolina, citește planul!', correct: 'Lies', accept: ['lies'] },
    { id: 'c', sentence: 'Mihai: Was ____ du da, Acar? (lesen — du)', translation: 'Ce citești acolo, Acar?', correct: 'liest', accept: ['liest'] },
    { id: 'd', sentence: 'Acar: Ich ____ den Plan für die Halle. (lesen — ich)', translation: 'Citesc planul pentru hală.', correct: 'lese', accept: ['lese'] },
    { id: 'e', sentence: 'Acar: ____ den LKW zur Halle! (fahren — imperativ du)', translation: 'Condu camionul la hală!', correct: 'Fahr', accept: ['fahr', 'fahre'] },
    { id: 'f', sentence: 'Acar: Und ____ vorsichtig! (sein — imperativ du)', translation: 'Și fii atent!', correct: 'Sei', accept: ['sei'] },
    { id: 'g', sentence: 'Acar: Mihai, ____ Carolina mit den Steinen! (helfen — imperativ du)', translation: 'Mihai, ajut-o pe Carolina cu pietrele!', correct: 'Hilf', accept: ['hilf'] },
    { id: 'h', sentence: 'Acar: Morgen ____ um sechs Uhr auf! (aufstehen — imperativ du, separabil)', translation: 'Mâine trezește-te la ora șase!', correct: 'Steh', accept: ['steh', 'stehe'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>👷 Acar dă instrucțiuni pe șantier. Completează (verbe tari + imperativ + separabile).</strong><br>
            Citește bine indicația din paranteză: ce verb și ce formă (Präsens sau Imperativ).<br>
            <em>💡 La verbe separabile prefixul e deja la final — scrie doar partea care lipsește.</em>
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="completează...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises on load
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
