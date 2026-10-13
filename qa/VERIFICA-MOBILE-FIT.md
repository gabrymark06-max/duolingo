# Schermata principale mobile senza scroll

La schermata Impara usa l’altezza dinamica del viewport (`100dvh`) e le safe area, mantenendo capitolo, obiettivo, progresso, tappe, prossima unità e navigazione visibili. Le tre tappe sono in fila; i percorsi più lunghi usano pagine di tre tappe con frecce e indicatore. Le lezioni restano accessibili con le stesse chiavi di progresso. Le decorazioni vengono rimosse dal percorso mobile per destinare spazio ai controlli.

Menu corsi ancorato al bordo sinistro, colori scuri e contrasto leggibile. Popup a larghezza del viewport, sopra la navigazione. Le guide, il catalogo e i testi lunghi rimangono scorribili per preservare leggibilità e accessibilità.

REA: 390×650, menu aperto, 320×568 con titolo C1 lungo, capitolo torre con passaggio alla seconda pagina. Schermate in `mobile-*.png`, Evidence in `rea-mobile-fit.json`. Nessun errore JavaScript. Build e controlli contenuti/audio passano. Il motore di test è Edge: non equivale a un test su iPhone fisico, ma vengono esercitati viewport ridotti e CSS dinamico per Safari.
