// ============================================
// VERB-KONJUGATION - Lecția 10 A1.1: Acar gibt Anweisungen
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// Verbe verificate pe PONS (de.pons.com/verbtabellen) · Präteritum → RO imperfect
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'sprechen', ro: 'a vorbi', typ: 'tare / neregulat', aux: 'haben', part: 'gesprochen',
        praes: [['ich','spreche','vorbesc'],['du','sprichst','vorbești'],['er/sie/es','spricht','vorbește'],['wir','sprechen','vorbim'],['ihr','sprecht','vorbiți'],['sie/Sie','sprechen','vorbesc']],
        praet: [['ich','sprach','vorbeam'],['du','sprachst','vorbeai'],['er/sie/es','sprach','vorbea'],['wir','sprachen','vorbeam'],['ihr','spracht','vorbeați'],['sie/Sie','sprachen','vorbeau']],
        perf: [['ich','habe gesprochen','am vorbit'],['du','hast gesprochen','ai vorbit'],['er/sie/es','hat gesprochen','a vorbit'],['wir','haben gesprochen','am vorbit'],['ihr','habt gesprochen','ați vorbit'],['sie/Sie','haben gesprochen','au vorbit']],
        note: 'Vokalwechsel e → i la du/er (du sprichst, er spricht). Verb TARE: Präteritum sprach, Partizip gesprochen.'
    },
    {
        inf: 'lesen', ro: 'a citi', typ: 'tare / neregulat', aux: 'haben', part: 'gelesen',
        praes: [['ich','lese','citesc'],['du','liest','citești'],['er/sie/es','liest','citește'],['wir','lesen','citim'],['ihr','lest','citiți'],['sie/Sie','lesen','citesc']],
        praet: [['ich','las','citeam'],['du','lasest','citeai'],['er/sie/es','las','citea'],['wir','lasen','citeam'],['ihr','last','citeați'],['sie/Sie','lasen','citeau']],
        perf: [['ich','habe gelesen','am citit'],['du','hast gelesen','ai citit'],['er/sie/es','hat gelesen','a citit'],['wir','haben gelesen','am citit'],['ihr','habt gelesen','ați citit'],['sie/Sie','haben gelesen','au citit']],
        note: 'Vokalwechsel e → ie la du/er — du liest = er liest (forme identice). Präteritum las, Partizip gelesen.'
    },
    {
        inf: 'sehen', ro: 'a vedea', typ: 'tare / neregulat', aux: 'haben', part: 'gesehen',
        praes: [['ich','sehe','văd'],['du','siehst','vezi'],['er/sie/es','sieht','vede'],['wir','sehen','vedem'],['ihr','seht','vedeți'],['sie/Sie','sehen','văd']],
        praet: [['ich','sah','vedeam'],['du','sahst','vedeai'],['er/sie/es','sah','vedea'],['wir','sahen','vedeam'],['ihr','saht','vedeați'],['sie/Sie','sahen','vedeau']],
        perf: [['ich','habe gesehen','am văzut'],['du','hast gesehen','ai văzut'],['er/sie/es','hat gesehen','a văzut'],['wir','haben gesehen','am văzut'],['ihr','habt gesehen','ați văzut'],['sie/Sie','haben gesehen','au văzut']],
        note: 'Vokalwechsel e → ie la du/er (du siehst, er sieht). Präteritum sah, Partizip gesehen.'
    },
    {
        inf: 'geben', ro: 'a da', typ: 'tare / neregulat', aux: 'haben', part: 'gegeben',
        praes: [['ich','gebe','dau'],['du','gibst','dai'],['er/sie/es','gibt','dă'],['wir','geben','dăm'],['ihr','gebt','dați'],['sie/Sie','geben','dau']],
        praet: [['ich','gab','dădeam'],['du','gabst','dădeai'],['er/sie/es','gab','dădea'],['wir','gaben','dădeam'],['ihr','gabt','dădeați'],['sie/Sie','gaben','dădeau']],
        perf: [['ich','habe gegeben','am dat'],['du','hast gegeben','ai dat'],['er/sie/es','hat gegeben','a dat'],['wir','haben gegeben','am dat'],['ihr','habt gegeben','ați dat'],['sie/Sie','haben gegeben','au dat']],
        note: 'Vokalwechsel e → i la du/er (du gibst, er gibt). Präteritum gab, Partizip gegeben.'
    },
    {
        inf: 'nehmen', ro: 'a lua', typ: 'tare / neregulat', aux: 'haben', part: 'genommen',
        praes: [['ich','nehme','iau'],['du','nimmst','iei'],['er/sie/es','nimmt','ia'],['wir','nehmen','luăm'],['ihr','nehmt','luați'],['sie/Sie','nehmen','iau']],
        praet: [['ich','nahm','luam'],['du','nahmst','luai'],['er/sie/es','nahm','lua'],['wir','nahmen','luam'],['ihr','nahmt','luați'],['sie/Sie','nahmen','luau']],
        perf: [['ich','habe genommen','am luat'],['du','hast genommen','ai luat'],['er/sie/es','hat genommen','a luat'],['wir','haben genommen','am luat'],['ihr','habt genommen','ați luat'],['sie/Sie','haben genommen','au luat']],
        note: 'Vokalwechsel e → i + scriere specială: du nimmst, er nimmt (h dispare, mm). Präteritum nahm, Partizip genommen.'
    },
    {
        inf: 'helfen', ro: 'a ajuta', typ: 'tare / neregulat', aux: 'haben', part: 'geholfen',
        praes: [['ich','helfe','ajut'],['du','hilfst','ajuți'],['er/sie/es','hilft','ajută'],['wir','helfen','ajutăm'],['ihr','helft','ajutați'],['sie/Sie','helfen','ajută']],
        praet: [['ich','half','ajutam'],['du','halfst','ajutai'],['er/sie/es','half','ajuta'],['wir','halfen','ajutam'],['ihr','halft','ajutați'],['sie/Sie','halfen','ajutau']],
        perf: [['ich','habe geholfen','am ajutat'],['du','hast geholfen','ai ajutat'],['er/sie/es','hat geholfen','a ajutat'],['wir','haben geholfen','am ajutat'],['ihr','habt geholfen','ați ajutat'],['sie/Sie','haben geholfen','au ajutat']],
        note: 'Vokalwechsel e → i la du/er (du hilfst, er hilft). Cere DATIV: er hilft MIR. Präteritum half, Partizip geholfen.'
    },
    {
        inf: 'fahren', ro: 'a conduce / a merge (cu un vehicul)', typ: 'tare / neregulat', aux: 'sein', part: 'gefahren',
        praes: [['ich','fahre','conduc'],['du','fährst','conduci'],['er/sie/es','fährt','conduce'],['wir','fahren','conducem'],['ihr','fahrt','conduceți'],['sie/Sie','fahren','conduc']],
        praet: [['ich','fuhr','conduceam'],['du','fuhrst','conduceai'],['er/sie/es','fuhr','conducea'],['wir','fuhren','conduceam'],['ihr','fuhrt','conduceați'],['sie/Sie','fuhren','conduceau']],
        perf: [['ich','bin gefahren','am mers'],['du','bist gefahren','ai mers'],['er/sie/es','ist gefahren','a mers'],['wir','sind gefahren','am mers'],['ihr','seid gefahren','ați mers'],['sie/Sie','sind gefahren','au mers']],
        note: '🚨 Perfekt cu SEIN — er IST gefahren (NU hat), pentru că e verb de mișcare. Capcană clasică pentru români! Vokalwechsel a → ä la du/er. Präteritum fuhr.'
    },
    {
        inf: 'laufen', ro: 'a alerga / a merge pe jos', typ: 'tare / neregulat', aux: 'sein', part: 'gelaufen',
        praes: [['ich','laufe','alerg'],['du','läufst','alergi'],['er/sie/es','läuft','aleargă'],['wir','laufen','alergăm'],['ihr','lauft','alergați'],['sie/Sie','laufen','aleargă']],
        praet: [['ich','lief','alergam'],['du','liefst','alergai'],['er/sie/es','lief','alerga'],['wir','liefen','alergam'],['ihr','lieft','alergați'],['sie/Sie','liefen','alergau']],
        perf: [['ich','bin gelaufen','am alergat'],['du','bist gelaufen','ai alergat'],['er/sie/es','ist gelaufen','a alergat'],['wir','sind gelaufen','am alergat'],['ihr','seid gelaufen','ați alergat'],['sie/Sie','sind gelaufen','au alergat']],
        note: '🚨 Perfekt cu SEIN — er IST gelaufen (verb de mișcare). Vokalwechsel au → äu la du/er (du läufst, er läuft). Präteritum lief.'
    },
    {
        inf: 'schlafen', ro: 'a dormi', typ: 'tare / neregulat', aux: 'haben', part: 'geschlafen',
        praes: [['ich','schlafe','dorm'],['du','schläfst','dormi'],['er/sie/es','schläft','doarme'],['wir','schlafen','dormim'],['ihr','schlaft','dormiți'],['sie/Sie','schlafen','dorm']],
        praet: [['ich','schlief','dormeam'],['du','schliefst','dormeai'],['er/sie/es','schlief','dormea'],['wir','schliefen','dormeam'],['ihr','schlieft','dormeați'],['sie/Sie','schliefen','dormeau']],
        perf: [['ich','habe geschlafen','am dormit'],['du','hast geschlafen','ai dormit'],['er/sie/es','hat geschlafen','a dormit'],['wir','haben geschlafen','am dormit'],['ihr','habt geschlafen','ați dormit'],['sie/Sie','haben geschlafen','au dormit']],
        note: 'Vokalwechsel a → ä la du/er (du schläfst, er schläft). Präteritum schlief, Partizip geschlafen.'
    },
    {
        inf: 'tragen', ro: 'a purta / a căra', typ: 'tare / neregulat', aux: 'haben', part: 'getragen',
        praes: [['ich','trage','port'],['du','trägst','porți'],['er/sie/es','trägt','poartă'],['wir','tragen','purtăm'],['ihr','tragt','purtați'],['sie/Sie','tragen','poartă']],
        praet: [['ich','trug','purtam'],['du','trugst','purtai'],['er/sie/es','trug','purta'],['wir','trugen','purtam'],['ihr','trugt','purtați'],['sie/Sie','trugen','purtau']],
        perf: [['ich','habe getragen','am purtat'],['du','hast getragen','ai purtat'],['er/sie/es','hat getragen','a purtat'],['wir','haben getragen','am purtat'],['ihr','habt getragen','ați purtat'],['sie/Sie','haben getragen','au purtat']],
        note: 'Vokalwechsel a → ä la du/er (du trägst, er trägt). Präteritum trug, Partizip getragen.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#6b7280;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe tari din lecție</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt: auxiliar + participiu).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong> (caută orice formă).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Toate cele 10 sunt verbe TARI — vocala se schimbă. La A1 înveți complet Präsens; Präteritum și Perfekt le vezi aici ca REFERINȚĂ (le aprofundezi la Lecțiile 11+ / 17). Atenție la fahren și laufen: Perfekt cu SEIN! Verificate pe PONS. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    html += '<div class="theory-box" style="background:#fff7ed; border-left:4px solid #ea580c; margin-top:14px;">' +
        '<p style="margin:0;">📎 <strong>essen</strong> — a mânca · <strong>deja conjugat la Lecția 5</strong> (Was kauft Mihai). ' +
        'Recap rapid: Präsens <strong>du isst / er isst</strong> (e → i) · Präteritum <strong>aß</strong> · Perfekt <strong>er hat gegessen</strong>.</p></div>';

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
