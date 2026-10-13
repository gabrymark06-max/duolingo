# Corso originale strutturato — 13 ottobre 2026

## Copertura effettiva

- Inglese: 89 capitoli. 45 unità del percorso A1–C1, nove per fascia, più 44 capitoli precedenti conservati nella biblioteca. 624 esercizi di apprendimento e 135 quesiti di verifica. Gli esercizi sullo stesso testo sono domande diverse, non frasi nuove artificialmente conteggiate.
- Ogni nuova unità: obiettivo, spiegazione, errore tipico, esercizi con identificatori stabili, verifica distinta e produzione libera. Cinque progetti integrati con testi progressivamente più lunghi, ascoltabili, e compiti scritti/orali.
- Scacchi: 38 capitoli, 107 posizioni giocabili, 54 domande didattiche e 54 quesiti di verifica con scenari diversi. Orientamento, pezzi, legalità, apertura, tattica, strategia, finali, patte e analisi.
- Audio: 728 MP3 en-US-AriaNeural. File presenti, intestazioni e dimensioni verificate; tutti decodificati da FFmpeg senza errori. Pronuncia non valutata foneticamente.
- Nessun reset dei progressi precedenti. Le nuove unità sono aggiunte a indici stabili; la migrazione apre il nuovo percorso mantenendo XP, completamenti e salvataggi.

## Controlli automatici

`npm run check` passa: regressioni del catalogo precedente, legalità delle 107 posizioni, scacchi/matti, raccolta stelle, identificatori, contenuti non ripetuti tra sessioni, verifiche inglesi con frasi diverse, ordine senza capitoli mancanti, intervalli del ripasso, soglia minima e forme contratte.

Una prova specifica distingue la vera forchetta da uno scacco che non attacca la torre. La validazione usa gli obiettivi e gli attacchi reali, accettando soluzioni equivalenti per scacco/matto. Gli esercizi guidati con destinazione esplicita continuano a verificare quella destinazione.

`npm run build` passa. `python qa/verifica-decodifica.py`: 728 file decodificati.

## Scenari REA e verifica visiva

- Desktop 1440×1000: apertura guida, regola, errore tipico, esempi e compito.
- Telefono 390×844: completa prima sessione A1 con scelta, composizione, dettato e risposta scritta; avvia la seconda con materiale diverso. Il nodo mostra due sessioni reali, non cinque finte.
- Telefono: testo libero salvato, verifica con tre risposte nuove completata al 100%; risultato separato da XP e compito libero.
- Telefono 390×1000: teoria delle forchette e mossa di cavallo verificata sulla scacchiera; feedback e controlli accessibili.
- Telefono: testo C1 lungo, scorrimento verso risposte, selezione e controllo senza sovrapposizioni.
- Desktop: un esercizio in scadenza viene ripassato e la coda non lo ripropone immediatamente. Nessun ripasso inventato su contenuti non studiati.

Nessun errore JavaScript nei replay completati. Un primo test di verifica richiedeva un selettore più preciso per distinguere il textarea del compito dal textarea della lezione; corretto nel replay. Bundle `rea-corso-strutturato.json` e schermate `corso-*.png`.

## Limiti della prima edizione

La ricerca è documentata in `docs/RICERCA-DIDATTICA.md` con fonti Consiglio d’Europa, IES, Cambridge, FIDE ed ECU. La mappa A1–C1 è una progressione editoriale, non un corso certificato o già validato da docenti e studenti. Le produzioni libere restano autovalutate: non esiste correzione semantica universale, interlocutore parlante o giudizio fonetico automatico. Il motore scacchistico locale e i quiz non assegnano un Elo. Mancano prove di efficacia e revisioni didattiche esterne per dichiarare “completo e perfetto al 100%”.

Nessun catalogo Duolingo copiato, nessuna pubblicazione, nessun commit.
