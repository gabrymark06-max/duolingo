import { english, chessLessons } from './data.js';

// Capitoli ed esercizi aggiuntivi originali. Non sono il catalogo proprietario.
const extra = [
 ['Offri e accetta bevande','Bevande e richieste',[
 ['Water, please','Acqua, per favore'],['Tea or coffee','Tè o caffè'],['I would like some milk','Vorrei del latte'],['No sugar, thank you','Niente zucchero, grazie'],['Do you want a drink','Vuoi qualcosa da bere'],['Yes, please','Sì, per favore'],['The coffee is hot','Il caffè è caldo'],['This glass is empty','Questo bicchiere è vuoto']]],
 ["Di’ da dove vieni",'Paesi e nazionalità',[
 ['I am from Italy','Vengo dall’Italia'],['Where are you from','Da dove vieni'],['He is from Canada','Lui viene dal Canada'],['We live in Milan','Viviamo a Milano'],['Are you Italian','Sei italiano'],['She speaks English','Lei parla inglese'],['My city is beautiful','La mia città è bella'],['They are from Spain','Loro vengono dalla Spagna']]],
 ['Presenta te stesso e la tua famiglia','Persone e relazioni',[
 ['My name is Anna','Mi chiamo Anna'],['This is my brother','Questo è mio fratello'],['My sister is a student','Mia sorella è una studentessa'],['We have two children','Abbiamo due figli'],['His father is a doctor','Suo padre è un medico'],['Our family is small','La nostra famiglia è piccola'],['Nice to meet you','Piacere di conoscerti'],['How old are you','Quanti anni hai']]],
 ['Usa i numeri','Quantità e prezzi',[
 ['There are twelve chairs','Ci sono dodici sedie'],['It costs twenty euros','Costa venti euro'],['I have three tickets','Ho tre biglietti'],['We need two more cups','Ci servono altre due tazze'],['The number is fifteen','Il numero è quindici'],['Half of the cake is gone','Metà della torta è finita']]],
 ['Leggi l’ora','Orari e appuntamenti',[
 ['It is half past eight','Sono le otto e mezza'],['The lesson ends at noon','La lezione finisce a mezzogiorno'],['Please arrive on time','Per favore arriva in orario'],['We are ten minutes late','Siamo in ritardo di dieci minuti'],['It is a quarter to six','Sono le sei meno un quarto'],['See you at seven','Ci vediamo alle sette']]],
 ['Fai una telefonata','Conversazioni al telefono',[
 ['Can I call you later','Posso chiamarti più tardi'],['I cannot hear you','Non riesco a sentirti'],['Could you speak more slowly','Potresti parlare più lentamente'],['Please leave a message','Per favore lascia un messaggio'],['The line is busy','La linea è occupata'],['I will call back tomorrow','Richiamerò domani']]],
 ['Chiedi aiuto','Richieste gentili',[
 ['Could you help me','Potresti aiutarmi'],['I do not understand','Non capisco'],['Can you repeat that','Puoi ripeterlo'],['What does this word mean','Che cosa significa questa parola'],['Please write it down','Per favore scrivilo'],['Thank you for your help','Grazie per il tuo aiuto']]],
 ['Esprimi le tue preferenze','Gusti e scelte',[
 ['I prefer the blue one','Preferisco quello blu'],['I like this idea','Mi piace questa idea'],['She does not like onions','A lei non piacciono le cipolle'],['Which one do you prefer','Quale preferisci'],['I would rather stay home','Preferirei restare a casa'],['This is my favorite song','Questa è la mia canzone preferita']]],
 ['Parla dello sport','Attività e allenamento',[
 ['We play football on Tuesdays','Giochiamo a calcio il martedì'],['She goes swimming every morning','Lei va a nuotare ogni mattina'],['The match starts soon','La partita inizia tra poco'],['Our team won yesterday','La nostra squadra ha vinto ieri'],['I need new running shoes','Mi servono nuove scarpe da corsa'],['He trains twice a week','Lui si allena due volte a settimana']]],
 ['Prenota una camera','Hotel e soggiorni',[
 ['I have a reservation','Ho una prenotazione'],['Is breakfast included','La colazione è inclusa'],['Can I have a quiet room','Posso avere una camera tranquilla'],['We are staying for two nights','Restiamo per due notti'],['What time is checkout','A che ora dobbiamo lasciare la camera'],['The room key does not work','La chiave della camera non funziona']]],
 ['Vai all’aeroporto','Voli e bagagli',[
 ['Where is the departure gate','Dove si trova il gate di partenza'],['My flight is delayed','Il mio volo è in ritardo'],['I have one suitcase','Ho una valigia'],['Please show your passport','Per favore mostra il passaporto'],['The plane leaves at six','L’aereo parte alle sei'],['I cannot find my luggage','Non riesco a trovare il mio bagaglio']]],
 ['Parla degli animali','Animali e natura',[
 ['The dog is sleeping','Il cane sta dormendo'],['Our cat likes milk','Al nostro gatto piace il latte'],['There is a bird in the tree','C’è un uccello sull’albero'],['The horse runs fast','Il cavallo corre veloce'],['Do you have a pet','Hai un animale domestico'],['We saw a fox yesterday','Abbiamo visto una volpe ieri']]],
 ['Usa i pronomi','Persone e oggetti',[
 ['Give it to me','Dallo a me'],['I can see them','Riesco a vederli'],['This book is yours','Questo libro è tuo'],['She is waiting for us','Lei ci sta aspettando'],['He told me the news','Lui mi ha raccontato la notizia'],['We invited him to dinner','Lo abbiamo invitato a cena']]],
 ['Parla delle tue abitudini','Frequenza e routine',[
 ['I usually walk to school','Di solito vado a scuola a piedi'],['She never drinks coffee','Lei non beve mai caffè'],['We sometimes eat out','A volte mangiamo fuori'],['He always arrives early','Lui arriva sempre presto'],['How often do you exercise','Quanto spesso ti alleni'],['I read every evening','Leggo ogni sera']]],
 ['Descrivi quello che succede','Presente progressivo',[
 ['I am cooking dinner','Sto preparando la cena'],['They are waiting outside','Loro stanno aspettando fuori'],['Is she studying now','Lei sta studiando adesso'],['The children are playing','I bambini stanno giocando'],['He is not listening','Lui non sta ascoltando'],['We are learning together','Stiamo imparando insieme']]],
 ['Fai ipotesi','Periodi ipotetici',[
 ['If it rains, we will stay home','Se piove, resteremo a casa'],['If you study, you will improve','Se studi, migliorerai'],['I would travel if I had time','Viaggerei se avessi tempo'],['What would you do','Che cosa faresti'],['If I were you, I would ask','Se fossi in te, chiederei'],['We can go if you are ready','Possiamo andare se sei pronto']]]
];
for (const [title, subtitle, pairs] of extra) english.push({title,subtitle,questions:pairs.map(([en,it])=>({type:'choice',en,it}))});

// Nuove frasi per le cinque sessioni interne: ogni sessione usa una selezione diversa.
const shopping = [
 ['The red shirt is too big','La camicia rossa è troppo grande'],['I need a new coat','Mi serve un cappotto nuovo'],['Where are the changing rooms','Dove sono i camerini'],['Can I pay by card','Posso pagare con la carta'],['These trousers are too short','Questi pantaloni sono troppo corti'],['How much is this hat','Quanto costa questo cappello'],['The jacket is on sale','La giacca è in saldo'],['I am looking for a sweater','Sto cercando un maglione'],['Do you have this in green','Hai questo in verde'],['The boots are comfortable','Gli stivali sono comodi'],['I wear a medium size','Porto una taglia media'],['These socks are cheap','Questi calzini costano poco'],['Can I return this dress','Posso restituire questo vestito'],['The shop closes at eight','Il negozio chiude alle otto'],['I like the black shoes','Mi piacciono le scarpe nere'],['This belt is too long','Questa cintura è troppo lunga'],['We need school uniforms','Ci servono uniformi scolastiche'],['The scarf is soft','La sciarpa è morbida'],['I bought a pair of gloves','Ho comprato un paio di guanti'],['My clothes are in the bag','I miei vestiti sono nella borsa']
];
english[8].questions.push(...shopping.map(([en,it])=>({type:'choice',en,it})));

const tactics=[
 ['Cattura i pezzi indifesi',[
 ['torre','c4','c7','7k/2q5/8/8/2R5/8/8/K7 w - - 0 1','capture','La torre può catturare la regina indifesa sulla stessa colonna.'],
 ['regina','f3','f7','7k/5r2/8/8/8/5Q2/8/K7 w - - 0 1','capture','Cattura la torre sulla colonna f con la tua regina.']]],
 ['Lo scacco di scoperta',[
 ['alfiere','e2','c4','4k3/8/8/8/8/8/4B3/K3R3 w - - 0 1','check','Spostando l’alfiere liberi la linea della torre verso il re.'],
 ['cavallo','e4','f6','4k3/8/8/8/4N3/8/8/K3R3 w - - 0 1','check','Il salto del cavallo libera la colonna della torre.']]],
 ['Matto sull’ultima traversa',[
 ['torre','a1','a8','7k/5ppp/8/8/8/8/8/R3K3 w - - 0 1','mate','Il re è bloccato dai suoi pedoni: la torre dà matto sull’ultima traversa.'],
 ['regina','d1','d8','7k/5ppp/8/8/8/8/8/3QK3 w - - 0 1','mate','La regina controlla tutta l’ultima traversa.']]],
 ['Il matto a scala',[
 ['torre','a1','a8','7k/1R6/8/8/8/8/8/R3K3 w - - 0 1','mate','Una torre impedisce la fuga sulla settima traversa, l’altra dà matto.'],
 ['torre','h1','h8','k7/6R1/8/8/8/8/8/4K2R w - - 0 1','mate','Le due torri collaborano su traverse consecutive.']]],
 ['Regina e re collaborano',[
 ['regina','g6','g7','7k/8/5KQ1/8/8/8/8/8 w - - 0 1','mate','Il re bianco protegge la regina che chiude le case di fuga.'],
 ['regina','b6','b7','k7/8/1QK5/8/8/8/8/8 w - - 0 1','mate','Avvicina la regina al re avversario, mantenendola protetta.']]],
 ['Attacca con l’alfiere',[
 ['alfiere','c3','f6','7k/8/5r2/8/8/2B5/8/K7 w - - 0 1','capture','L’alfiere cattura la torre seguendo la diagonale.'],
 ['alfiere','f3','c6','k7/8/2r5/8/8/5B2/8/7K w - - 0 1','capture','Controlla l’intera diagonale prima di muovere.']]]
];
for(const [title,rows] of tactics)chessLessons.push({title,subtitle:'Tattica e finali',questions:rows.map(([piece,from,to,fen,goal,explanation])=>({type:'chess',piece,from,to,fen,goal,explanation}))});
