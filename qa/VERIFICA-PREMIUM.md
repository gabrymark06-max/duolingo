# Verifica della ricostruzione premium — 13 ottobre 2026

## Riferimento osservato

Browser integrato CUA autenticato: percorso inglese, sezione 2/capitolo 1
“Compra vestiti”, hub Ripasso, introduzione e primo esercizio di ascolto,
scelta illustrata “negozio”, catalogo sezioni e percorso introduttivo scacchi.
Scacchi: primo esercizio con torre e stelle da raccogliere in più mosse.
Nessun esercizio completato sull'account reale. Il link “Inizia a giocare”
ha aperto il corso scacchi e la scelta iniziale del livello, che non è stata
confermata. L'account è rimasto sul corso scacchi, con il livello da scegliere.

Le catture autenticate sono osservazioni CUA, non Evidence REA.
REA opera sulla copia locale: nessuna esportazione di credenziali o cookie.

## Contenuti e compilazione

`npm run check`: 35 puzzle con mosse legali, inclusi arrocco, promozione,
en passant, evasione dallo scacco, forchetta e percorsi di stelle.
28 capitoli inglesi, 162 frasi/quesiti originali e 4 storie. Verificati
normalizzazione delle risposte e assenza di mutazioni del catalogo.
`npm run build`: compilazione Vite riuscita.

## Scenari REA

Esportazione completa: `rea-premium-20261013.json`. Tutti i passaggi degli
scenari seguenti sono completati, nessun evento page-error rilevato.

- Percorso desktop 1440×1000:
  `ev_66a0d4daa828991e964d27daebfdc5e468bf1e5987e97109258c143ade3c5078`.
- Sessione inglese completa: scelta, parole ordinate, risposta scritta errata,
  dettato con tastiera, quattro abbinamenti, ripetizione correttiva, XP,
  fine sessione e ricaricamento:
  `ev_d3852237e8175c396affdb452f66ba70af5a9447683114fee217a884fd605437`.
- Due stelle raccolte con la torre e feedback positivo su telefono:
  `ev_638e4270db94c0aa0e990396318ecc3324096e497c6b8ebf3b2ffc8aa8af2eac`.
- Partita: e2–e4, risposta legale del motore e ritorno al turno del giocatore:
  `ev_07579e8ec8ec316ea3497e06c2a008e60608bffb921c7cfb4ccc384bc9529d82`.
- Storia: apertura libreria, dialogo, risposta corretta e fine sessione:
  `ev_7929c1b2bb372ef4dd608ab5a9613c59d49be2a2572100082822c1210a9497ae`.
- Scelta illustrata su schermo 360×780:
  `ev_c34d3067c973a79cf8fe674f99c31e615b1a7bd90098a440af14c05850f042be`.
- Migrazione progressi precedenti: conservati 40 XP, due capitoli e due
  sessioni pregresse a 768×1024:
  `ev_f9cc7d5073cf5fd207871f6ca82bebae9692d446814b8515d764420f5c1fa1f9`.
- Vocabolario: ricerca “shirt”, una frase pertinente e traduzione:
  `ev_3f910a6625f3f9a4c0ff4b7e182fb06ec7b10f6d1a7ea091287aaac3ab1835b4`.
- Navigazione mobile completa Missioni/Parole/Profilo/Impara a 360×780:
  `ev_5f665fa3a2f8e74d8b063392836052e296711c3095ce3e724e5fc7aeb33777dc`.

## Limiti della verifica e della parità

Il microfono e la qualità sonora richiedono una prova manuale con il browser
e le voci installate. Il riconoscimento trascrive, non valuta la fonetica.
Il motore scacchistico locale non è Oscar e non offre un Elo validato.
Il completamento di una sessione non dimostra parità dell'intero catalogo:
grafica, personaggi, illustrazioni e contenuti non sono identici a Duolingo.
Multiplayer, classifiche condivise e videochiamate AI non implementati.
La libreria di capitoli è esplorabile liberamente; lo sblocco delle tappe
all'interno di ogni capitolo resta sequenziale.
