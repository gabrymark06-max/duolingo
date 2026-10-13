const vocab = (title, subtitle, pairs) => ({ title, subtitle, questions: pairs.map(([en,it],i) => ({type:i===2?'listen':i===4?'build':'choice',en,it})) });
export const english = [
  vocab('Le prime parole','Saluta e presentati', [['Hello','Ciao'],['Thank you','Grazie'],['Good morning','Buongiorno'],['Goodbye','Arrivederci'],['I am a student','Sono uno studente']]),
  vocab('Piacere di conoscerti','Parla di te', [['My name is Alex','Mi chiamo Alex'],['How are you?','Come stai?'],['I am fine','Sto bene'],['Nice to meet you','Piacere di conoscerti'],['I speak English','Parlo inglese']]),
  vocab('Al bar','Ordina qualcosa di buono', [['A coffee, please','Un caffè, per favore'],['Water','Acqua'],['Tea','Tè'],['The bill, please','Il conto, per favore'],['I would like a tea','Vorrei un tè']]),
  vocab('La mia famiglia','Le persone che ami', [['Mother','Madre'],['Brother','Fratello'],['Sister','Sorella'],['Father','Padre'],['This is my family','Questa è la mia famiglia']]),
  vocab('La vita di ogni giorno','Racconta la tua giornata', [['I work','Lavoro'],['I study','Studio'],['I go home','Vado a casa'],['I eat breakfast','Faccio colazione'],['I read a book','Leggo un libro']]),
  vocab('In città','Trova la tua strada', [['The station','La stazione'],['Turn left','Gira a sinistra'],['Turn right','Gira a destra'],['The supermarket','Il supermercato'],['Where is the station?','Dov’è la stazione?']]),
  vocab('In viaggio','Pronto a partire?', [['A ticket','Un biglietto'],['The airport','L’aeroporto'],['My passport','Il mio passaporto'],['The hotel','L’albergo'],['I have a reservation','Ho una prenotazione']]),
  vocab('I tuoi progetti','Parla di quello che farai', [['Tomorrow','Domani'],['Next week','La prossima settimana'],['I want to learn','Voglio imparare'],['See you soon','A presto'],['I will travel tomorrow','Viaggerò domani']]),
];
const puzzle = (piece, from, to, fen, explanation, extra={}) => ({type:'chess',piece,from,to,fen,explanation,...extra});
const rook = (to='d7') => puzzle('torre','d4',to,'7k/8/8/8/3R4/8/8/K7 w - - 0 1','La torre si muove in linea retta, lungo righe e colonne.');
const bishop = (to='f6') => puzzle('alfiere','c3',to,'7k/8/8/8/8/2B5/8/K7 w - - 0 1','L’alfiere si muove in diagonale e rimane sullo stesso colore.');
const knight = (to='f5') => puzzle('cavallo','d4',to,'7k/8/8/8/3N4/8/8/K7 w - - 0 1','Il cavallo si muove a L: due caselle in una direzione e una di lato.');
export const chessLessons = [
  {title:'La torre',subtitle:'Pensa in linea retta',questions:[rook('d7'),rook('g4'),rook('d2')]},
  {title:'L’alfiere',subtitle:'Scopri le diagonali',questions:[bishop('f6'),bishop('a5'),bishop('e1')]},
  {title:'Il cavallo',subtitle:'Un salto a forma di L',questions:[knight('f5'),knight('c6'),knight('b3')]},
  {title:'La regina',subtitle:'Il pezzo più versatile',questions:['d7','g7','a4'].map(to=>puzzle('regina','d4',to,'7k/8/8/8/3Q4/8/8/K7 w - - 0 1','La regina combina i movimenti della torre e dell’alfiere.'))},
  {title:'Il re e il pedone',subtitle:'Un passo alla volta',questions:[puzzle('re','e1','e2','7k/8/8/8/8/8/8/4K3 w - - 0 1','Il re si sposta di una sola casella, senza entrare sotto attacco.'),puzzle('pedone','e2','e4','7k/8/8/8/8/8/4P3/K7 w - - 0 1','Dalla casella iniziale il pedone può avanzare di due caselle se sono libere.'),puzzle('pedone','e4','e5','7k/8/8/8/4P3/8/8/K7 w - - 0 1','Dopo la prima mossa, il pedone avanza di una casella.')]},
  {title:'La prima cattura',subtitle:'Conquista una casella',questions:[puzzle('torre','d4','d7','7k/3p4/8/8/3R4/8/8/K7 w - - 0 1','La torre cattura il pedone avversario spostandosi sulla sua casella.'),puzzle('alfiere','c3','f6','7k/8/5p2/8/8/2B5/8/K7 w - - 0 1','L’alfiere cattura in diagonale.'),puzzle('pedone','e4','d5','7k/8/8/3p4/4P3/8/8/K7 w - - 0 1','Il pedone avanza dritto, ma cattura in diagonale.')]},
  {title:'Scacco!',subtitle:'Metti il re sotto attacco',questions:[puzzle('torre','d4','h4','7k/8/8/8/3R4/8/8/K7 w - - 0 1','Su h4 la torre attacca il re lungo la colonna h.',{goal:'check'}),puzzle('alfiere','c3','f6','8/8/8/8/7k/2B5/8/K7 w - - 0 1','Da f6 l’alfiere punta al re h4 sulla diagonale.',{goal:'check'}),puzzle('cavallo','d4','f5','8/6k1/8/8/3N4/8/8/K7 w - - 0 1','Da f5 il cavallo attacca g7: è scacco.',{goal:'check'})]},
  {title:'Scacco matto',subtitle:'Chiudi la partita',questions:[puzzle('regina','g6','g7','7k/8/5KQ1/8/8/8/8/8 w - - 0 1','La regina su g7 è protetta dal re f6. Il re nero non può catturarla né fuggire.',{goal:'mate'}),puzzle('regina','b6','b7','k7/8/1QK5/8/8/8/8/8 w - - 0 1','La regina su b7, protetta dal re c6, chiude tutte le vie di fuga.',{goal:'mate'}),puzzle('torre','a2','a8','6k1/5ppp/8/8/8/8/R7/K7 w - - 0 1','La torre sulla traversa 8 dà matto: i pedoni bloccano la fuga del re.',{goal:'mate'})]},
];
export const courses = {
  english:{name:'Inglese',label:'Corso di inglese',color:'#58cc02',dark:'#46a302',unit1:'Le basi, un passo alla volta',unit2:'Porta l’inglese nella tua giornata',lessons:english},
  chess:{name:'Scacchi',label:'Corso di scacchi',color:'#00b894',dark:'#009879',unit1:'La tua prima mossa',unit2:'Dalle mosse alle piccole vittorie',lessons:chessLessons},
};
