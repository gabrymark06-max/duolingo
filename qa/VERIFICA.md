# Verifica del 13/10/2026

Build Vite riuscita. Bundle JS iniziale ~22 KB gzip; CSS ~6 KB gzip.
Tutte le 24 posizioni e mosse corrette sono state controllate con chess.js,
comprese le 3 posizioni di scacco e le 3 di matto; 40 esercizi inglesi presenti.

REA MCP `capture_browser_scenario`, Edge 155, profili temporanei separati:

| Prova | Risultato | Evidence |
| --- | --- | --- |
| Percorso desktop 1440×1000 | Rendering ispezionato, nessun errore JS | ev_d51e871fc9863bba7a3a47381f74c730fba87ddf1ba13d8eae42bf4ef829d1d2 |
| Percorso mobile 390×844 | Rendering ispezionato, navigazione inferiore | ev_78dc2206d321de16a41e88096dd10b5d4d6ae5373466f5adda891d10a2d8b1ee |
| Lezione inglese intera | 5/5, +20 XP, lezione 2 sbloccata, traguardo e serie | ev_df8ad5ed1af8ba1e90a9e046cf3e023b9a0b15c00b8e1cd1015d8f6ab82bfa38 |
| Lezione scacchi mobile intera | 3/3, +20 XP, schermata finale | ev_4942fca1d9554ce0ab20bcbb9125a0701e2bfae2be8ffd6d302e76b5b6efe25d |
| Esercizio inglese mobile | Pulsanti e dialog ispezionati | ev_c4ddfde156c1b0fca377473ad64f61bc96d4f7e21b870dbf508c319ed3d27eb5 |
| Scacchiera mobile | Selezione pezzo, mosse legali e obiettivo visibili | ev_0171cf50b0f947db0057ac8099a4872aeaeb4b7a242d6acdf76f5e6be02db648 |
| Errore e ricarica | Mossa legale errata, feedback, rifiuto mossa illegale, fine lezione e progressi conservati dopo ricarica | ev_a7b45a21510c8a3d5525d40477a01137c1098f64234d46dc7264297262133dd8 |

Nessun page-error in questi scenari. Controllo finale anche a 360×780 e
768×1024: percorso leggibile, indicatore della prossima tappa senza
sovrapposizione alla precedente. Screenshot finali estratti in `desktop.png`,
`mobile.png`, `scacchi-mobile.png`; risultati completi nel bundle locale
`rea-evidence-finale.json`. Copie temporanee del browser chiuse da REA.
Le prove non modificano il profilo personale o i suoi progressi.

Verifica ripetibile dei contenuti: `npm run check`. Build finale:
`npm run build`. Script PowerShell di avvio controllato sintatticamente.

Limiti: audio non ascoltato manualmente; dipende dalla sintesi del dispositivo.
Non e' una replica del curriculum completo o del backend Duolingo. Nessun
account, sincronizzazione cloud o pubblicazione. Tastiera supportata (Tab,
numeri 1–4, Enter sui pulsanti, Esc); nessun audit WCAG completo eseguito.
