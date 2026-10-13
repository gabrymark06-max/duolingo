# Correzioni grafica, obiettivi scacchi e audio — 13 ottobre 2026

## Problemi riprodotti e risolti

- Le mascotte secondarie erano posizionate a 496 px anche nei percorsi con cinque nodi: finivano sopra il separatore del capitolo e i controlli in fondo. Ora sono escluse dai percorsi corti; separatori e comandi hanno un livello proprio.
- Il colore azzurro del pulsante audio lento proveniva dalla regola generica `text-button`: ora testo e icona sono scuri sul fondo azzurro.
- Gli esercizi introduttivi chiedevano di indovinare una destinazione nascosta. Ora indicano la casella (es. d7), la contrassegnano e mostrano la regola. Selezionare il pezzo mostra le mosse legali.
- La voce lenta non sceglieva alcuna voce inglese; la voce normale prendeva la prima voce disponibile. Sono stati generati 318 MP3 locali en-US-AriaNeural. Normale e lento usano lo stesso file; il lento conserva il tono a 0,75x. Il fallback attende le voci ed esclude quelle non inglesi.
- Le esercitazioni con obiettivo `capture` verificano la cattura, invece di richiedere erroneamente uno scacco.

## Controlli eseguiti

- REA, percorso corto desktop 1440x1500: separatore e controlli senza mascotte sovrapposte.
- REA, scacchi mobile 390x1000: istruzioni visibili, destinazione d7 segnalata, mosse legali visibili dopo selezione della torre. Mossa d4-d7 accettata con feedback corretto.
- REA, audio mobile 390x844: controllo lento leggibile, file MP3 locale selezionato, nessun errore JavaScript.
- Browser integrato: riproduzione effettiva confermata, `paused=false`, `readyState=4`, velocita' 0,75 e nessun errore media. Nessuna lezione personale completata durante questo controllo.
- Tutti i 318 file sono presenti, contengono dati MP3 e sono stati decodificati da FFmpeg senza errori.
- `npm run check` e build completati. Progressi personali conservati.

File: `correzioni-percorso.png`, `correzioni-torre.png`, `correzioni-audio.png` e `rea-correzioni-grafica-audio.json`.

Rigenerazione facoltativa: installare `edge-tts` da PyPI, eseguire `node qa/audio-testi.mjs` e `python qa/genera-audio.py`. Le registrazioni gia' presenti non vengono rigenerate. La generazione invia soltanto i testi didattici al servizio vocale; la riproduzione dell'app usa i file locali. Nessun token o abbonamento e' necessario per riprodurli.

Riferimento per la voce: [documentazione Microsoft delle voci TTS](https://github.com/MicrosoftDocs/azure-ai-docs/blob/main/articles/ai-services/speech-service/includes/language-support/tts.md). La generazione usa il client `edge-tts`; non e' un'integrazione Azure con chiave API.
