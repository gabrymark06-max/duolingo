# Sessioni distinte

Il problema precedente era la rotazione dei formati su un unico piccolo pool.
Il percorso ora usa gruppi disgiunti di quattro frasi inglesi o tre problemi
scacchistici, fino a cinque sessioni per nodo. I nodi vuoti non vengono mostrati.
Il ripasso resta esplicitamente una ripresa del materiale studiato.

La torre ha quindici posizioni diverse in cinque tappe originali: verticale,
orizzontale, ostacoli, catture e scacco. I vecchi progressi non vengono cancellati.

`npm run check` verifica assenza di sovrapposizioni nelle sessioni, copertura di
ogni contenuto distinto, cinque tappe/15 FEN della torre, legalita' di 59 problemi
e presenza degli audio inglesi. Il capitolo bevande ha due sessioni con quattro
frasi diverse ciascuna. Build completata.

REA: seconda sessione della torre aperta con progressi predisposti in ambiente
isolato; mostra c4-g4 e la regola orizzontale, invece di riproporre il primo problema.
Nessun errore JavaScript. Le sessioni sono materiale locale originale: non sono
il catalogo di Duolingo.
