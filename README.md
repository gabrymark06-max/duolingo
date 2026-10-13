# Lingo — inglese e scacchi

Applicazione locale realizzata dalla richiesta di ricreare l'esperienza di
Duolingo con soltanto inglese e scacchi. La grafica del percorso usa font e
asset osservati nel riferimento; codice e materiale didattico locale sono
indipendenti. Nessun account Duolingo necessario per usare la copia locale.

## Avvio

Apri `AVVIA-LINGO.cmd`, oppure dalla cartella del progetto:

```powershell
npm ci
npm run dev
```

Apri http://127.0.0.1:5187. Per la versione ottimizzata: `npm run build` e
`npm run preview`. Il progetto e' in `jarvis/`, fuori dalla repo principale.

## Contenuti

- Inglese: 89 capitoli, 624 esercizi di apprendimento e 135 quesiti di verifica. 45 unità strutturate A1–C1 (9 per fascia) e i 44 capitoli precedenti conservati come biblioteca. Traduzioni, parole da
  comporre, risposte scritte, dettato con parole o tastiera, abbinamenti,
  scelta illustrata e completamento di una frase.
- Quattro storie con dialoghi ascoltabili e domanda di comprensione.
- Scacchi: 38 capitoli, 107 posizioni su scacchiera, 54 quiz didattici e 54 quesiti di verifica. Raccolta stelle in più mosse, catture,
  scacco/matto, arrocco, promozione, en passant, difesa e forchetta.
- Partita completa contro motore locale con ricerca di due semimosse,
  annullamento turno, notazione delle mosse e nuova partita.
- Percorso scuro, fino a cinque sessioni distinte nei nodi lezione, storie, radio, ripasso,
  forzieri, anteprima del capitolo seguente, guida e selezione capitoli.
- Hub ripasso, vocabolario cercabile, missioni e ripasso degli errori.
- XP, serie giornaliera, obiettivo modificabile, traguardi ed esportazione JSON.
- Salvataggio locale nel browser, corsi indipendenti, layout desktop/mobile.

Le sessioni nuove valgono 20 XP; ripasso e sessioni ripetute 5 XP. Gli errori
mostrano la soluzione e ritornano alla fine della sessione finché corretti.
Le sessioni aggiornano XP, gemme, serie e missioni; i capitoli si completano
al termine di tutte le tappe. Il ripasso non sblocca le tappe:
completa le lezioni dal percorso principale.

Le sessioni nuove ora suddividono il materiale disponibile senza ripetere
le stesse frasi o posizioni tra una sessione e la successiva. I nodi senza
contenuti nuovi vengono nascosti. Il ripasso riprende deliberatamente i
contenuti studiati. La torre comprende cinque tappe originali con quindici
posizioni: verticale, orizzontale, ostacoli, catture e scacco.

Il motore chess.js 1.4.0 (BSD-2-Clause) valida le mosse. Nelle lezioni iniziali
la casella da raggiungere e' esplicita e la regola del pezzo e' sempre visibile.
Audio inglese: 728 registrazioni locali con voce en-US-AriaNeural, incluse frasi di verifica e testi estesi.
L'ascolto lento riproduce la stessa voce a 0,75x mantenendo il tono.
Se un file non e' disponibile, il fallback seleziona esclusivamente una voce
inglese, attendendo che le voci del browser siano caricate.
Font e SVG osservati sono locali;
la loro provenienza e' in `public/reference/sources.json`.
Il riconoscimento vocale opzionale dipende dal browser
e dal suo servizio; si avvia soltanto dal pulsante “Inizia a parlare”. In sua
assenza resta la risposta scritta. Verifica la trascrizione prima di confermare:
questo è riconoscimento del testo, non una valutazione fonetica della pronuncia.

I progressi appartengono a questo browser e all'indirizzo locale usato, senza
sincronizzazione cloud. Cambiare porta/browser o cancellare i dati del sito
crea un percorso nuovo. Non vengono inviati a Duolingo.

## Ricerca e verifica

Il 13 ottobre 2026 il percorso premium, ascolto, sezioni e introduzione scacchi
sono stati osservati nell'account autenticato con il browser integrato CUA.
REA richiede CDP e non accede direttamente alla sessione IAB: viene utilizzato
per verificare la ricostruzione locale con scenari riproducibili.
Il catalogo originale osservato supera 1000 capitoli: questa versione ha
contenuti originali e copertura limitata, non è una copia identica integrale.
Il personaggio del percorso e' un fotogramma statico del riferimento.
Non include multiplayer online,
classifiche condivise, videochiamate AI, motore Oscar o backend Duolingo.
Il premium dell'account Duolingo non fornisce tali servizi a questa app.
Decisioni visuali in `DESIGN.md`; verifiche ed Evidence REA in `qa/`.

## Metodo del nuovo corso

Obiettivo e spiegazione prima degli esercizi; esempi contestualizzati, completamento, ascolto, recupero scritto e comprensione. Ogni fascia inglese termina con un progetto integrato: testo più lungo, comprensione, verifica su un testo diverso e compito autonomo di scrittura e presentazione. Una prova breve iniziale aiuta a scegliere dove partire. Il corso scacchi ordina orientamento, regole, apertura, tattica, strategia, finali e analisi delle partite.

Le verifiche non ripetono automaticamente gli errori: il punteggio conta il primo tentativo e la soglia interna è 80% con almeno tre risposte. Il superamento di tre quesiti richiede quindi tutte e tre corrette. Il ripasso programmato riguarda contenuti realmente incontrati, con intervalli di 1, 3, 7, 14, 30 e 60 giorni; un errore ritorna dopo dieci minuti. Sono parametri di prodotto da calibrare, non una garanzia didattica.

Testi e analisi libere vengono salvati sul dispositivo, con rubriche di autovalutazione. Le produzioni libere e il parlato non ricevono voti automatici. Le forme contratte comuni sono accettate; le risposte scritte sono confrontate con il modello e le alternative previste, non valutate semanticamente da un docente o modello AI. Scacco, matto e forchette accettano mosse che soddisfano l'obiettivo effettivo, anziché una sola coordinata memorizzata.

I livelli sono obiettivi editoriali: questa prima edizione non certifica A1–C1, non assegna Elo e non è stata validata su studenti da un docente. La mappa copre i temi dichiarati; non dimostra la padronanza completa di tutte le competenze. Per sviluppo linguistico completo servono produzione estesa, interlocutori reali e feedback qualificato. Fonti, criteri e limiti sono in `docs/RICERCA-DIDATTICA.md`; controlli in `qa/VERIFICA-CORSO.md`.

## GitHub e Vercel

Repository: https://github.com/gabrymark06-max/duolingo. Progetto Vercel: `duolingo`.
Il framework è Vite: `npm run build` produce `dist/`. Gli audio e le risorse pubbliche sono inclusi nel deploy. Backup, registrazioni dei test, dipendenze installate e configurazioni locali restano fuori dalla repository.
