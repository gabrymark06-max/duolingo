# Allineamento al riferimento — 13 ottobre 2026

Confronto diretto con Duolingo autenticato su `/learn`, corso inglese, Sezione 2 / Capitolo 1 «Compra vestiti». L'account originale è stato solo osservato: nessuna lezione completata, nessun pagamento o modifica delle credenziali.

## Modifiche

- Font Duolingo Sans variabile, icone e asset osservati nella pagina. Provenienza in `public/reference/sources.json`.
- Sidebar, navigazione, colonna centrale, indicatori, missioni e percorso a zig-zag ricostruiti sulle dimensioni del riferimento.
- Personaggio principale esportato dal SVG renderizzato: è un fotogramma statico, non l'animazione originale completa.
- Nodi con cinque lezioni interne, popup di avvio, progressione separata per nodo e ricompense del forziere. I capitoli precedentemente completati rimangono completati.
- Pagine Suoni, Negozio e Altro accessibili. La congelazione protegge un singolo giorno perso quando il giorno precedente è stato studiato. Le classifiche mostrano solo risultati personali locali.
- 44 capitoli inglesi / 284 frasi; 20 capitoli scacchi / 47 problemi. Le cinque sessioni del capitolo shopping usano selezioni differenti di dodici esercizi.
- Il materiale didattico aggiuntivo è originale e non costituisce il catalogo proprietario completo di Duolingo.

## Verifica

- `npm run check`: tutte le 47 mosse dei problemi sono legali; scacchi e matti verificati con chess.js; raccolte di stelle, normalizzazione e immutabilità del catalogo controllate.
- `npm run build`: completata.
- REA desktop 1440 × 1000, mobile 390 × 844, apertura lezione scacchi: nessun errore JavaScript.
- REA sessione completa di una storia con progressi predisposti: storia completata, nodo seguente sbloccato, +20 XP / +5 gemme, missione aggiornata a 20/30. Dati di prova isolati dal browser personale.
- Screenshot e scenari riproducibili nella cartella `qa/`.

## Differenze ancora aperte

La schermata del percorso è ora molto più vicina al riferimento. L'app intera non è una copia identica: mancano il catalogo originale delle sezioni avanzate, le storie e gli audio originali completi, tutte le animazioni e le schermate premium osservabili, i servizi di pronuncia/conversazione AI e le classifiche online. Il riferimento mostra sezioni da 30, 60, 255, 260, 180 e 180 capitoli: non sono stati sostituiti con centinaia di titoli vuoti o copie ripetute.

L'MCP REA verifica gli scenari locali. L'accesso autenticato di Codex è stato osservato attraverso la connessione browser disponibile; non è stato copiato nei browser di REA né nella repo.
