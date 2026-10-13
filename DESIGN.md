# Lingo — inglese e scacchi

Ricostruzione locale dell'esperienza di apprendimento richiesta, con codice,
esercizi e mascotte originali. Pubblico italiano, principianti; azione principale:
aprire la prossima lezione del percorso. Solo inglese e scacchi.

## Riferimenti osservati prima dell'implementazione

REA MCP `capture_browser_scenario`, 13/10/2026, Edge headless:
- https://it.duolingo.com/learn: redirect pubblico alla homepage, bianco,
  verde luminoso, titoli arrotondati, pulsanti con bordo inferiore in rilievo.
  Evidence ev_6ee2957de5aa99c1067b9e62a1377f1f2ffc2df68be9e81819185b2dd391da63.
- https://it.duolingo.com/chess: verde acqua, illustrazioni semplici,
  testo grigio scuro e gerarchia chiara. Evidence
  ev_b9e8db3e60e66a4389576f1dcda2903235078f0435bec39b898bf9385e09c30a.
- https://styles.refero.design/: composizione ariosa e tipografia gerarchica.
- https://collectui.com/: controlli compatti e separazione leggibile delle aree.

Il percorso autenticato /learn non e' stato osservato: la mappa e gli esercizi
sono una ricostruzione progettata, non una copia del codice o dei contenuti.
Nessun asset proprietario copiato. Mascotte geometrica e icone SVG originali.

## Sistema

Palette: bianco #ffffff, testo #4b4b4b, bordo #e5e5e5, verde #58cc02,
azzurro #1cb0f6, acqua scacchi #00b894, giallo #ffc800.
Tipografia: Nunito da Google Fonts con fallback rounded/system sans;
titoli 26–30px, corpo 16–18px, etichette 13px pesanti.
Spazi: 4/8/12/16/24/32/48/64. Bordi 2px, raggi 14–20px,
ombra inferiore netta sui controlli; feedback press 100ms, reduced-motion.

Desktop: navigazione sinistra fissa 240px, percorso centrale 560px,
riepilogo destro 310px. Firma: nodi circolari a serpentina con prossimo
passo segnalato; mascotte originale accanto al percorso. Nessuna statistica
inventata: XP, serie e progressi derivano dalle lezioni completate.
Mobile: barra corso/statistiche sopra, percorso singolo, navigazione sotto,
touch target >=44px, esercizi a schermo pieno, scacchiera adattiva.

## Comportamento

Salvataggio locale versionato; inglese e scacchi hanno progressi distinti.
Esercizi con feedback esplicito e spiegazione; una risposta sbagliata non
impedisce di imparare. Scacchi: mosse validate da chess.js, non animazioni
simulate. Ripasso, obiettivo giornaliero, traguardi e cambio corso funzionanti.
Audio inglese tramite sintesi vocale del browser, con fallback testuale.
Semantica HTML, focus visibile, dialog accessibile, tastiera, etichette e
messaggi live. Verifica desktop/mobile e completamento lezione prima consegna.

## Aggiornamento autenticato 13 ottobre 2026
Osservazione diretta nel browser integrato con account premium: sfondo #131f24,
bordi #37464f, testo #f1f7fb, nodi azzurri inglese e verde acqua scacchi.
La precedente osservazione pubblica non descriveva il percorso autenticato.
Mappa senza hero introduttiva; intestazione compatta capitolo, nodi di 70px,
5 sessioni per blocco inglese, storie e radio, colonna missioni a destra.
Tablet: nav laterale solo icone; telefono: barra inferiore, nessun overflow.
Ripasso premium osservato: pronuncia, ascolto con parole/tastiera, parole,
storie ed errori. Scacchi: raccolta stelle su scacchiera, problemi, partite.
Implementiamo esercizi e contenuti originali equivalenti; non dichiariamo
uguaglianza del catalogo di oltre 1000 capitoli o dei motori privati.
REA non può collegarsi alla sessione IAB senza endpoint CDP supportato:
le osservazioni autenticata sono CUA, i test locali REA sono distinti.
Salvataggio precedente preservato; nessuna sincronizzazione con Duolingo.

## Confronto geometrico diretto
Richiesta esplicita: ricostruzione fedele, senza stile o personaggi reinterpretati.
Viewport comune 1440x1000: sidebar252; area centrale592; colonna destra368;
gap40; margini centrali adattivi. Sidebar: logo128x30 a32/32; voci52 alte,
passo60 e icone32. Banner592x90 a336/48; testo19/22 e metadati16/24.
Nodi70x65 con icone42x34; passo verticale77-90, offset0/-45/-70/-45/0/45.
Topbar solo sulla colonna destra. Font rilevato duolingo-sans 400/500/700.
Asset acquisiti via inventario pageAssets del browser, soltanto immagini e CSS.
Animazioni e font identificati nello stesso inventario. Asset Duolingo:
nessuna licenza di redistribuzione stabilita; prototipo locale, non pubblicato.
Non inserire credenziali, cookie o API autenticate nel progetto.
La parità del catalogo resta da dimostrare: nomi e contenuti osservati devono
essere registrati con provenienza, senza gonfiare il numero con duplicati.
# Aggiornamento verificato del 13 ottobre — confronto diretto

La pagina del percorso segue ora il riferimento premium scuro osservato: sidebar 254 px, centro 592 px, destra 368 px, intercolonna 48 px, intestazione 90 px, nodi 70 × 65 px con passo di circa 85 px. Il font è Duolingo Sans variabile; risorse SVG e provenienza sono salvate in `public/reference`. Il personaggio del percorso usa un fotogramma SVG esportato dal riferimento. Il percorso mobile conserva proporzioni, popup, barra inferiore e controlli realmente utilizzabili.

Il capitolo contiene nodi distinti: lezioni con cinque sessioni, storie, ascolto, ripasso, forziere e riepilogo. La progressione usa chiavi separate per corso, capitolo e nodo. Il catalogo locale resta distinto dal catalogo completo del servizio originale: 44 capitoli inglesi e 20 scacchi.


Correzioni richieste: personaggi decorativi vincolati all'altezza del percorso, mai sovrapposti a separatori o pulsanti. Pulsanti ascolto con testo e icona scuri ad alto contrasto. Scacchi: obiettivo esplicito, regola sempre leggibile, casella bersaglio nelle lezioni introduttive. Audio inglese statica naturale en-US con riproduzione normale e lenta coerenti, fallback esclusivamente a voci inglesi.

## Corso strutturato originale
Manteniamo il percorso scuro e i controlli esistenti. I nuovi capitoli hanno livelli, obiettivi, guida breve prima degli esercizi, verifica separata e ripasso distribuito. Catalogo per livelli tramite sezioni espandibili, righe leggibili e pulsanti di almeno 44 px. Distinguere completamento, verifica automatica e attività di produzione libera: nessuna certificazione CEFR o Elo implicita. Conservare indici e progressi dei capitoli precedenti; nuovo percorso aggiunto senza sostituire materiale.

## Edizione didattica finale
45 nuove unità inglesi ordinate A1–C1, con cinque progetti di ricezione e produzione; 44 capitoli conservati in biblioteca. Scacchi: 38 capitoli ordinati per fondamenti, apertura, tattica, strategia, finali e pratica. Guide con corpo 18 px e righe distese, sezioni per livello espandibili, rubriche con checkbox grandi. Verifica distinta dal completamento e dal compito autonomo. Schermate reali controllate a 1440×1000 e 390×844/1000, compresi testi lunghi e feedback. Provenienza didattica in docs/RICERCA-DIDATTICA.md.

## Rifinitura del percorso — screenshot utente
Preservare fondo #131f24, font arrotondato, azzurro inglese e verde acqua scacchi. Rendere comprensibili le tre tappe del corso strutturato con etichette Lezioni, Ripasso, Verifica. Mostrare obiettivo e progresso reale sotto il banner. Percorso con passo verticale 118 px e decorazione interamente contenuta sulla destra, ridotta su mobile. Eliminare la seconda mappa inattiva per le nuove unità: mantenere il collegamento alla successiva in un piè di percorso chiaro. Banner e tappe accessibili; non cambiare chiavi dei progressi né contenuti. Verificare desktop, tablet e telefono, compreso popup aperto.

## Telefono senza scroll della schermata principale
Riferimento: screenshot iPhone fornito, menu fuori bordo e verifica nascosta dalla barra inferiore. Schermata Impara vincolata a 100dvh con safe area, header 54px e navigazione 64px. Tappe in fila, gruppi di massimo tre per i capitoli estesi; controlli di paginazione espliciti. Obiettivo, progresso, prossima unità e tutti i capitoli sempre presenti. Menu corsi scuro entro la larghezza del viewport. Popup sopra i controlli, senza dipendere dalla posizione dei nodi. Le guide e i testi estesi restano leggibili e scorribili; non comprimere tutto il catalogo in una schermata. Nessuna modifica ai progressi.

## Correzione menu iPhone
Screenshot con voce selezionata chiara e menu tagliato. Fissare i colori del menu senza dipendere dalle media query e posizionarlo rispetto al viewport visibile, con margini minimi. Ricalcolare alla variazione del visualViewport, anche in caso di zoom. Controllare 390 e 320 px, apertura e cambio corso. Conservare lo zoom accessibile e i progressi.

## Icona Home iPhone
Usare il gufo verde già presente nel progetto su fondo scuro pieno, centrato e con margine. Fornire PNG 180 px per Apple e 192/512 px per il manifest web. Nome breve Lingo e apertura standalone; nessuna modifica all'header o ai progressi. Riferimento: schermata Aggiungi a Home dell'utente, che mostra la lettera L al posto dell'icona.

## Modalità Home a tutta altezza
Riferimento iPhone: barra browser assente, molto spazio vuoto attorno alle tre tappe. In modalità standalone usare la stessa altezza dinamica con safe area, ma su schermi alti aumentare nodi, etichette, banner e pulsanti. Mantenere tutte le azioni nella schermata e il layout compatto sui telefoni bassi. Nessuna variazione ai progressi o alla navigazione desktop.

## Margine superiore Home
Dallo screenshot iPhone, abbassare header e banner di 20 px oltre la safe area in modalità standalone sui telefoni alti. Assorbire lo spazio nel percorso flessibile senza spostare la navigazione inferiore e senza aggiungere scroll.

## Shell mobile unica per tutte le sezioni
Le cinque immagini mostrano safe area rispettata solo in Impara, header sotto l'orologio nelle altre sezioni e navigazione ad altezze diverse. Unificare tutte le viste mobile in una griglia alta 100dvh: workspace flessibile e navigazione inferiore come ultima riga stabile. Header fuori dall'area scorrevole, margine safe area su ogni vista, 20 px aggiuntivi in modalità Home. Solo il contenuto lungo scorre internamente. Conservare il percorso senza scroll e adattare anche le intestazioni delle lezioni alla safe area. Verificare passaggi fra tutte le cinque tab e contenuti lunghi.

## Barra aderente al bordo inferiore
Screenshot con spazio vuoto eccessivo sotto le icone. Fissare la barra al bordo inferiore del viewport in tutte le sezioni mobile e riservare esattamente la sua altezza nel workspace. Margine inferiore limitato a 34 px per il gesto Home; altezza controlli 64 px. Conservare intestazione protetta e scroll interno.

## Altezza completa in Home iOS
La barra resta sollevata nello screenshot nonostante bottom:0 sia confermato nel CSS pubblico. Ipotesi: viewport standalone ridotto. In modalità Home iOS usare l'altezza orientata dello schermo e ancorare la navigazione al telaio assoluto, senza dipendere dal containing block dei fixed di Safari. Limitare il workaround a iOS standalone e differenze ragionevoli fra viewport e schermo; preservare Safari normale, zoom e desktop. Verificare con viewport ridotto simulato. Riferimento tecnico: https://bugs.webkit.org/show_bug.cgi?id=301994 (non prova della versione iOS del dispositivo).
