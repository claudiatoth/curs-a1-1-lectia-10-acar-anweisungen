// ============================================
// TEORIE - Lecția 10: Acar gibt Anweisungen
// Claudia Toth · A1.1 — Annettes Deutschkurs · Lecția 10 din 10
// Sursă DF: 29 (teorie Starke Verben), 29-Z1/30/30-Z1/30-Z2 (Übungen),
//           124/125/129 (Imperativ Übungen), 51-Z3 (Präsens)
// REGULĂ: tabele de conjugare SEPARATE per verb, fiecare cu coloana Traducere RO
// ============================================

const theoryHTML = `
    <!-- 0: Intro + notice diacritice + povestea -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👷 1. Astăzi: Acar dă instrucțiuni pe șantier</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Acar e Vorarbeiter (maistru) pe șantier</h4>
                <p>Acar lucrează ca <strong>Vorarbeiter</strong> pe un șantier mare în Oranienburg, lângă Berlin. Toată ziua el <strong>dă instrucțiuni</strong> echipei: ia ăsta, citește planul, condu camionul, ajută-l pe Mihai!</p>
                <p>Astăzi învățăm exact instrumentele pentru asta — ultima lecție din A1.1:</p>
                <ul style="margin-left: 18px; margin-top: 6px;">
                    <li><strong>Starke Verben</strong> (verbele tari) — verbe foarte frecvente care schimbă vocala (du l<strong>ie</strong>st, er f<strong>ä</strong>hrt)</li>
                    <li><strong>Imperativ</strong> — cum dai o comandă sau o instrucțiune: informal (Nimm!), către un grup (Nehmt!) și politicos (Nehmen Sie!)</li>
                </ul>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar (Vorarbeiter)</div>
                        <div class="dialog-text">Guten Morgen! Mihai, nimm den Hammer und hilf Carolina!
                            <span class="translation">Bună dimineața! Mihai, ia ciocanul și ajut-o pe Carolina!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai</div>
                        <div class="dialog-text">Alles klar, Chef! Was liest du da?
                            <span class="translation">S-a făcut, șefule! Ce citești acolo?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar</div>
                        <div class="dialog-text">Ich lese den Bauplan. Fahr bitte den LKW zur Halle und sei vorsichtig!
                            <span class="translation">Citesc planul de construcție. Condu te rog camionul la hală și fii atent!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai</div>
                        <div class="dialog-text">Mache ich! Du sprichst zu schnell, aber ich verstehe alles.
                            <span class="translation">Mă ocup! Vorbești prea repede, dar înțeleg tot.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul lecției</h4>
                <ul style="margin-left: 18px;">
                    <li>Să recunoști și să conjugi <strong>verbele tari</strong> cu cele 4 tipuri de Vokalwechsel</li>
                    <li>Să eviți <strong>capcana persoanei</strong>: doar du și er/sie/es se schimbă</li>
                    <li>Să formezi <strong>Imperativul</strong> la du, ihr și Sie (+ verbul neregulat sein)</li>
                    <li>Să dai comenzi cu <strong>verbe separabile</strong> (Steh auf! Mach die Tür zu!)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Ce sunt verbele tari + regula Vokalwechsel -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎯 2. Verbele tari și regula Vokalwechsel</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-starke-regel.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📚 Aceeași terminație, dar vocala se schimbă</h4>
                <p>Vestea bună: verbele tari folosesc <strong>exact aceleași terminații</strong> ca verbele slabe — <strong>-e / -st / -t / -en / -t / -en</strong> (din Lecția 3).</p>
                <p>Singura diferență: la verbele tari, vocala din rădăcină se schimbă <strong>doar la persoana a 2-a și a 3-a singular</strong> (du și er/sie/es). Restul rămân normale.</p>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626;">
                <h4>🚨 Cele 4 tipuri de Vokalwechsel (schimbare de vocală)</h4>
                <ul style="margin-left: 18px; margin-top: 6px;">
                    <li><strong>e → i</strong> — sprechen → du spr<strong>i</strong>chst (a vorbi); și: essen, geben, helfen, nehmen</li>
                    <li><strong>e → ie</strong> — lesen → du l<strong>ie</strong>st (a citi); și: sehen</li>
                    <li><strong>a → ä</strong> — fahren → du f<strong>ä</strong>hrst (a conduce); și: schlafen, tragen</li>
                    <li><strong>au → äu</strong> — laufen → du l<strong>äu</strong>fst (a alerga / a merge pe jos)</li>
                </ul>
                <p style="margin-top: 10px;">⚠️ Schimbarea apare <strong>NUMAI</strong> la <strong>du</strong> și <strong>er/sie/es</strong>. La ich, wir, ihr, sie/Sie vocala rămâne ca în infinitiv.</p>
            </div>
        </div>
    </div>

    <!-- 2: Conjugări complete — tabele separate per verb -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📋 3. Conjugări complete (tabel separat pentru fiecare verb)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-konjugation.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <p style="margin: 6px 0 4px;"><strong>e → i</strong> · <em>sprechen</em> (a vorbi)</p>
            <table class="grammar-table">
                <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>ich</td><td>spreche</td><td>eu vorbesc</td></tr>
                <tr><td>du</td><td><strong>sprichst</strong></td><td>tu vorbești (e → i)</td></tr>
                <tr><td>er/sie/es</td><td><strong>spricht</strong></td><td>el/ea vorbește (e → i)</td></tr>
                <tr><td>wir</td><td>sprechen</td><td>noi vorbim</td></tr>
                <tr><td>ihr</td><td>sprecht</td><td>voi vorbiți</td></tr>
                <tr><td>sie/Sie</td><td>sprechen</td><td>ei vorbesc / dvs. vorbiți</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>e → ie</strong> · <em>lesen</em> (a citi)</p>
            <table class="grammar-table">
                <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>ich</td><td>lese</td><td>eu citesc</td></tr>
                <tr><td>du</td><td><strong>liest</strong></td><td>tu citești (e → ie)</td></tr>
                <tr><td>er/sie/es</td><td><strong>liest</strong></td><td>el/ea citește (e → ie)</td></tr>
                <tr><td>wir</td><td>lesen</td><td>noi citim</td></tr>
                <tr><td>ihr</td><td>lest</td><td>voi citiți</td></tr>
                <tr><td>sie/Sie</td><td>lesen</td><td>ei citesc / dvs. citiți</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>a → ä</strong> · <em>fahren</em> (a conduce / a merge cu un vehicul)</p>
            <table class="grammar-table">
                <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>ich</td><td>fahre</td><td>eu conduc</td></tr>
                <tr><td>du</td><td><strong>fährst</strong></td><td>tu conduci (a → ä)</td></tr>
                <tr><td>er/sie/es</td><td><strong>fährt</strong></td><td>el/ea conduce (a → ä)</td></tr>
                <tr><td>wir</td><td>fahren</td><td>noi conducem</td></tr>
                <tr><td>ihr</td><td>fahrt</td><td>voi conduceți</td></tr>
                <tr><td>sie/Sie</td><td>fahren</td><td>ei conduc / dvs. conduceți</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>a → ä</strong> · <em>schlafen</em> (a dormi)</p>
            <table class="grammar-table">
                <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>ich</td><td>schlafe</td><td>eu dorm</td></tr>
                <tr><td>du</td><td><strong>schläfst</strong></td><td>tu dormi (a → ä)</td></tr>
                <tr><td>er/sie/es</td><td><strong>schläft</strong></td><td>el/ea doarme (a → ä)</td></tr>
                <tr><td>wir</td><td>schlafen</td><td>noi dormim</td></tr>
                <tr><td>ihr</td><td>schlaft</td><td>voi dormiți</td></tr>
                <tr><td>sie/Sie</td><td>schlafen</td><td>ei dorm / dvs. dormiți</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>au → äu</strong> · <em>laufen</em> (a alerga / a merge pe jos)</p>
            <table class="grammar-table">
                <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>ich</td><td>laufe</td><td>eu alerg</td></tr>
                <tr><td>du</td><td><strong>läufst</strong></td><td>tu alergi (au → äu)</td></tr>
                <tr><td>er/sie/es</td><td><strong>läuft</strong></td><td>el/ea aleargă (au → äu)</td></tr>
                <tr><td>wir</td><td>laufen</td><td>noi alergăm</td></tr>
                <tr><td>ihr</td><td>lauft</td><td>voi alergați</td></tr>
                <tr><td>sie/Sie</td><td>laufen</td><td>ei aleargă / dvs. alergați</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>e → i</strong> · <em>helfen</em> (a ajuta)</p>
            <table class="grammar-table">
                <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>ich</td><td>helfe</td><td>eu ajut</td></tr>
                <tr><td>du</td><td><strong>hilfst</strong></td><td>tu ajuți (e → i)</td></tr>
                <tr><td>er/sie/es</td><td><strong>hilft</strong></td><td>el/ea ajută (e → i)</td></tr>
                <tr><td>wir</td><td>helfen</td><td>noi ajutăm</td></tr>
                <tr><td>ihr</td><td>helft</td><td>voi ajutați</td></tr>
                <tr><td>sie/Sie</td><td>helfen</td><td>ei ajută / dvs. ajutați</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>e → i (special)</strong> · <em>nehmen</em> (a lua) — atenție la scriere: nimm<strong>st</strong>, nimm<strong>t</strong></p>
            <table class="grammar-table">
                <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>ich</td><td>nehme</td><td>eu iau</td></tr>
                <tr><td>du</td><td><strong>nimmst</strong></td><td>tu iei (e → i, h dispare)</td></tr>
                <tr><td>er/sie/es</td><td><strong>nimmt</strong></td><td>el/ea ia (e → i, h dispare)</td></tr>
                <tr><td>wir</td><td>nehmen</td><td>noi luăm</td></tr>
                <tr><td>ihr</td><td>nehmt</td><td>voi luați</td></tr>
                <tr><td>sie/Sie</td><td>nehmen</td><td>ei iau / dvs. luați</td></tr>
            </table>
        </div>
    </div>

    <!-- 3: Verbe tari frecvente + capcana persoanei -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⚠️ 4. Verbe tari frecvente + capcana persoanei</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-haeufige-verben.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <p style="margin: 6px 0 4px;">Cele mai frecvente verbe tari (forma <strong>du</strong> și <strong>er/sie/es</strong> + traducere):</p>
            <table class="grammar-table">
                <tr><th>Infinitiv</th><th>du</th><th>er/sie/es</th><th>Traducere RO</th></tr>
                <tr><td>essen</td><td>isst</td><td>isst</td><td>a mânca</td></tr>
                <tr><td>geben</td><td>gibst</td><td>gibt</td><td>a da</td></tr>
                <tr><td>nehmen</td><td>nimmst</td><td>nimmt</td><td>a lua</td></tr>
                <tr><td>sprechen</td><td>sprichst</td><td>spricht</td><td>a vorbi</td></tr>
                <tr><td>helfen</td><td>hilfst</td><td>hilft</td><td>a ajuta</td></tr>
                <tr><td>lesen</td><td>liest</td><td>liest</td><td>a citi</td></tr>
                <tr><td>sehen</td><td>siehst</td><td>sieht</td><td>a vedea</td></tr>
                <tr><td>fahren</td><td>fährst</td><td>fährt</td><td>a conduce</td></tr>
                <tr><td>schlafen</td><td>schläfst</td><td>schläft</td><td>a dormi</td></tr>
                <tr><td>tragen</td><td>trägst</td><td>trägt</td><td>a purta / a căra</td></tr>
                <tr><td>laufen</td><td>läufst</td><td>läuft</td><td>a alerga</td></tr>
            </table>

            <div class="theory-box" style="background: #fef9c3; border-left: 4px solid #ca8a04; margin-top: 14px;">
                <h4>🪤 Capcana persoanei</h4>
                <p>Un verb tare are <strong>3 persoane × 2 numere = 6 forme</strong>. Schimbarea de vocală apare doar la <strong>2 din ele</strong>: du și er/sie/es.</p>
                <p>Deci la <strong>ich, wir, ihr, sie/Sie</strong> verbul arată exact ca un verb slab — fără surprize: <em>ich fahre, wir fahren, ihr fahrt, sie fahren</em>. Greșeala tipică e „ich fähre" — GREȘIT, vocala nu se schimbă la ich!</p>
            </div>
        </div>
    </div>

    <!-- 4: Imperativ du / ihr / Sie + sein -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📣 5. Imperativ — comenzi: du / ihr / Sie</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-imperativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📚 Imperativul = comandă, instrucțiune, rugăminte</h4>
                <p>Imperativul are <strong>3 forme</strong>, în funcție de cine primește comanda: o persoană apropiată (du), un grup (ihr), sau formal (Sie).</p>
            </div>

            <p style="margin: 10px 0 4px;"><strong>Forma du</strong> — pleci de la forma „du", scoți <strong>-st</strong> și pronumele. Verbele <strong>e → i</strong> PĂSTREAZĂ schimbarea!</p>
            <table class="grammar-table">
                <tr><th>Infinitiv</th><th>Imperativ du</th><th>Traducere RO</th></tr>
                <tr><td>kommen (du kommst)</td><td>Komm!</td><td>Vino!</td></tr>
                <tr><td>nehmen (du nimmst)</td><td>Nimm!</td><td>Ia! (e → i păstrat)</td></tr>
                <tr><td>lesen (du liest)</td><td>Lies!</td><td>Citește! (e → ie păstrat)</td></tr>
                <tr><td>geben (du gibst)</td><td>Gib!</td><td>Dă! (e → i păstrat)</td></tr>
                <tr><td>helfen (du hilfst)</td><td>Hilf!</td><td>Ajută! (e → i păstrat)</td></tr>
                <tr><td>sprechen (du sprichst)</td><td>Sprich!</td><td>Vorbește! (e → i păstrat)</td></tr>
                <tr><td>fahren (du fährst)</td><td>Fahr!</td><td>Condu! (a → ä NU se păstrează)</td></tr>
                <tr><td>arbeiten (du arbeitest)</td><td>Arbeite!</td><td>Lucrează! (-e după t/d/n)</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Forma ihr</strong> — exact forma „ihr", fără pronume.</p>
            <table class="grammar-table">
                <tr><th>Infinitiv</th><th>Imperativ ihr</th><th>Traducere RO</th></tr>
                <tr><td>nehmen (ihr nehmt)</td><td>Nehmt!</td><td>Luați! (către un grup)</td></tr>
                <tr><td>lesen (ihr lest)</td><td>Lest!</td><td>Citiți! (către un grup)</td></tr>
                <tr><td>arbeiten (ihr arbeitet)</td><td>Arbeitet!</td><td>Lucrați! (către un grup)</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Forma Sie</strong> (politicos) — verb la infinitiv + <strong>Sie</strong> (inversiune).</p>
            <table class="grammar-table">
                <tr><th>Infinitiv</th><th>Imperativ Sie</th><th>Traducere RO</th></tr>
                <tr><td>nehmen</td><td>Nehmen Sie!</td><td>Luați! (politicos)</td></tr>
                <tr><td>lesen</td><td>Lesen Sie!</td><td>Citiți! (politicos)</td></tr>
                <tr><td>warten</td><td>Warten Sie bitte!</td><td>Așteptați vă rog! (politicos)</td></tr>
            </table>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626; margin-top: 14px;">
                <h4>🚨 Verbul sein este NEREGULAT la imperativ</h4>
                <table class="grammar-table">
                    <tr><th>Persoană</th><th>Imperativ</th><th>Traducere RO</th></tr>
                    <tr><td>du</td><td>Sei!</td><td>Fii! (Sei vorsichtig! = Fii atent!)</td></tr>
                    <tr><td>ihr</td><td>Seid!</td><td>Fiți! (către un grup)</td></tr>
                    <tr><td>Sie</td><td>Seien Sie!</td><td>Fiți! (politicos)</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: Imperativ + verbe separabile + sinteză -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🔧 6. Imperativ cu verbe separabile + sinteză</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-separabile-sinteza.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔧 Verbe separabile la imperativ</h4>
                <p>La verbele separabile (din Lecția 9), prefixul se desparte și merge la <strong>finalul</strong> comenzii — exact ca la Präsens.</p>
            </div>
            <table class="grammar-table">
                <tr><th>Infinitiv</th><th>Imperativ du</th><th>Traducere RO</th></tr>
                <tr><td>aufstehen</td><td>Steh auf!</td><td>Trezește-te! / Ridică-te!</td></tr>
                <tr><td>anrufen</td><td>Ruf an!</td><td>Sună!</td></tr>
                <tr><td>zumachen</td><td>Mach zu!</td><td>Închide!</td></tr>
                <tr><td>aufmachen</td><td>Mach auf!</td><td>Deschide!</td></tr>
                <tr><td>einkaufen</td><td>Kauf ein!</td><td>Fă cumpărături!</td></tr>
                <tr><td>mitkommen</td><td>Komm mit!</td><td>Vino cu mine / cu noi!</td></tr>
            </table>

            <div class="theory-box" style="background: #ecfdf5; margin-top: 16px;">
                <h4>🎯 Sinteză — Acar pe șantier</h4>
                <p>Acar folosește tot ce am învățat astăzi când dă instrucțiuni echipei:</p>
                <ul style="margin-left: 18px; margin-top: 6px;">
                    <li><strong>Mihai, nimm den Hammer!</strong> — Mihai, ia ciocanul! (imperativ du, e → i)</li>
                    <li><strong>Lies den Bauplan!</strong> — Citește planul! (imperativ du, e → ie)</li>
                    <li><strong>Fahr den LKW zur Halle!</strong> — Condu camionul la hală! (a → ä NU la imperativ)</li>
                    <li><strong>Hilf Carolina und steh um sechs Uhr auf!</strong> — Ajut-o pe Carolina și trezește-te la 6! (separabil)</li>
                    <li><strong>Seien Sie vorsichtig, Herr Ingenieur!</strong> — Fiți atent, dle inginer! (sein, politicos)</li>
                </ul>
                <p style="margin-top: 10px;">Cu asta ai terminat <strong>A1.1</strong> — felicitări! 🎉 Poți deja să te prezinți, să numeri, să cumperi, să faci o programare, să vorbești despre familie și să dai instrucțiuni. Urmează A1.2, unde intră trecutul în joc.</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
