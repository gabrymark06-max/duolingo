import { english, chessLessons } from './data.js';
import {nodeSessions} from './lesson-plan.js';

// Contenuti originali: gli indici delle otto lezioni precedenti restano stabili.
const chapters = [
 ['Compra vestiti', 'Shopping e colori', [
  ['The store is open','Il negozio è aperto'],['I need a blue shirt','Ho bisogno di una camicia blu'],['These shoes are expensive','Queste scarpe sono costose'],['Do you have a smaller size','Hai una taglia più piccola'],['This dress is beautiful','Questo vestito è bello'],['I would like to try it on','Vorrei provarlo']]],
 ['Fai un tour della tua casa','Stanze e oggetti',[
  ['The kitchen is next to the bedroom','La cucina è accanto alla camera da letto'],['There is a table in the living room','C’è un tavolo in soggiorno'],['My room has two windows','La mia stanza ha due finestre'],['The bathroom is upstairs','Il bagno è al piano di sopra'],['We have a small garden','Abbiamo un piccolo giardino'],['The door is closed','La porta è chiusa']]],
 ['Parla del tuo lavoro','Professioni e ufficio',[
  ['I work in an office','Lavoro in un ufficio'],['She is a teacher','Lei è un’insegnante'],['The meeting starts at nine','La riunione inizia alle nove'],['My colleague is very friendly','Il mio collega è molto amichevole'],['I am looking for a job','Sto cercando un lavoro'],['He works from home','Lui lavora da casa']]],
 ['Ordina al ristorante','Cibo e richieste',[
  ['A table for two please','Un tavolo per due per favore'],['Can I see the menu','Posso vedere il menù'],['I would like some water','Vorrei dell’acqua'],['The soup is delicious','La zuppa è deliziosa'],['I do not eat meat','Non mangio carne'],['Could we have the bill','Potremmo avere il conto']]],
 ['Organizza il weekend','Tempo libero',[
  ['What do you do on Sundays','Cosa fai la domenica'],['We play chess every weekend','Giochiamo a scacchi ogni fine settimana'],['I like watching movies','Mi piace guardare film'],['Let us go to the park','Andiamo al parco'],['The museum is closed today','Il museo è chiuso oggi'],['Are you free tomorrow','Sei libero domani']]],
 ['Descrivi il tempo','Meteo e stagioni',[
  ['It is raining today','Oggi piove'],['The weather is sunny','Il tempo è soleggiato'],['Winter is cold here','Qui l’inverno è freddo'],['Take your umbrella','Prendi il tuo ombrello'],['It will snow tomorrow','Domani nevicherà'],['I prefer warm weather','Preferisco il tempo caldo']]],
 ['Racconta ieri','Passato semplice',[
  ['I visited my friend yesterday','Ho visitato il mio amico ieri'],['We watched a film last night','Abbiamo guardato un film ieri sera'],['She went to school','Lei è andata a scuola'],['I bought a new book','Ho comprato un libro nuovo'],['Did you enjoy the trip','Ti è piaciuto il viaggio'],['He did not call me','Lui non mi ha chiamato']]],
 ['Fai progetti','Futuro e intenzioni',[
  ['I am going to study tonight','Studierò stasera'],['We will visit London','Visiteremo Londra'],['She wants to learn chess','Lei vuole imparare gli scacchi'],['Are you going to travel','Viaggerai'],['I will help you tomorrow','Ti aiuterò domani'],['They are planning a holiday','Stanno organizzando una vacanza']]],
 ['Confronta le cose','Comparativi e superlativi',[
  ['This train is faster','Questo treno è più veloce'],['My house is smaller than yours','La mia casa è più piccola della tua'],['This is the best restaurant','Questo è il ristorante migliore'],['Today is warmer than yesterday','Oggi fa più caldo di ieri'],['She is the tallest person here','Lei è la persona più alta qui'],['This puzzle is easier','Questo problema è più facile']]],
 ['Vai dal medico','Salute e benessere',[
  ['I have a headache','Ho mal di testa'],['You should drink some water','Dovresti bere dell’acqua'],['I need an appointment','Ho bisogno di un appuntamento'],['My arm hurts','Mi fa male il braccio'],['The pharmacy is nearby','La farmacia è vicina'],['How are you feeling today','Come ti senti oggi']]],
 ['Studia e impara','Scuola e università',[
  ['The exam is next week','L’esame è la prossima settimana'],['I study computer science','Studio informatica'],['Can you explain this again','Puoi spiegare questo di nuovo'],['I forgot my notebook','Ho dimenticato il mio quaderno'],['The library is quiet','La biblioteca è silenziosa'],['We have to finish our homework','Dobbiamo finire i nostri compiti']]],
 ['Usa la tecnologia','Dispositivi e internet',[
  ['My phone is not working','Il mio telefono non funziona'],['The password is incorrect','La password è sbagliata'],['I need to charge my laptop','Devo caricare il mio portatile'],['Can you send me the file','Puoi mandarmi il file'],['The website is easy to use','Il sito è facile da usare'],['I saved the document','Ho salvato il documento']]],
 ['Parla delle esperienze','Present perfect',[
  ['I have never been to London','Non sono mai stato a Londra'],['She has already finished','Lei ha già finito'],['Have you ever played chess','Hai mai giocato a scacchi'],['We have lived here for two years','Viviamo qui da due anni'],['I have lost my keys','Ho perso le mie chiavi'],['They have just arrived','Sono appena arrivati']]],
 ['Esprimi possibilità','Condizionali',[
  ['If it rains we will stay home','Se piove resteremo a casa'],['I would like to learn more','Vorrei imparare di più'],['If I had time I would travel','Se avessi tempo viaggerei'],['You can come if you want','Puoi venire se vuoi'],['What would you do','Cosa faresti'],['We could try again','Potremmo provare di nuovo']]],
 ['Dai consigli','Verbi modali',[
  ['You should take a break','Dovresti fare una pausa'],['I must leave now','Devo andare via ora'],['You do not have to hurry','Non devi avere fretta'],['May I open the window','Posso aprire la finestra'],['She might be at home','Lei potrebbe essere a casa'],['We ought to be careful','Dovremmo essere prudenti']]],
 ['Proteggi l’ambiente','Natura e sostenibilità',[
  ['We should recycle more','Dovremmo riciclare di più'],['The forest is beautiful','La foresta è bella'],['Do not waste water','Non sprecare acqua'],['There are fewer cars today','Ci sono meno automobili oggi'],['I walk to work','Vado al lavoro a piedi'],['The air is cleaner here','L’aria è più pulita qui']]],
 ['Condividi le opinioni','Opinioni e motivazioni',[
  ['I agree with you','Sono d’accordo con te'],['In my opinion it is useful','Secondo me è utile'],['I understand your point','Capisco il tuo punto di vista'],['Could you give me an example','Potresti farmi un esempio'],['I am not sure about that','Non sono sicuro di questo'],['It depends on the situation','Dipende dalla situazione']]],
 ['Racconta una storia','Narrazione',[
  ['While I was walking I saw a cat','Mentre camminavo ho visto un gatto'],['Suddenly the lights went out','All’improvviso le luci si sono spente'],['Before we left we checked the map','Prima di partire abbiamo controllato la mappa'],['After dinner we played chess','Dopo cena abbiamo giocato a scacchi'],['Eventually we found the station','Alla fine abbiamo trovato la stazione'],['It was an unforgettable day','È stata una giornata indimenticabile']]],
 ['Organizza un progetto','Obiettivi e collaborazione',[
  ['We need to plan the next step','Dobbiamo pianificare il prossimo passo'],['The deadline is on Friday','La scadenza è venerdì'],['Could you review my work','Potresti controllare il mio lavoro'],['We made a lot of progress','Abbiamo fatto molti progressi'],['Let us solve this problem together','Risolviamo questo problema insieme'],['I am proud of our team','Sono orgoglioso della nostra squadra']]],
 ['Viaggia con sicurezza','Imprevisti e informazioni',[
  ['My flight has been delayed','Il mio volo è stato ritardato'],['Where can I collect my luggage','Dove posso ritirare il mio bagaglio'],['I would like to change my booking','Vorrei cambiare la mia prenotazione'],['Is breakfast included','La colazione è inclusa'],['I need directions to the station','Ho bisogno di indicazioni per la stazione'],['Could you speak more slowly','Potresti parlare più lentamente']]],
];
chapters.forEach(([title,subtitle,pairs])=>english.push({title,subtitle,questions:pairs.map(([en,it],i)=>({type:['choice','build','listen','write','dictation','match'][i%6],en,it}))}));
english[8].questions.unshift({type:'picture',en:'store',it:'negozio',pictures:[{word:'store',symbol:'🏬'},{word:'teacher',symbol:'👨‍🏫'},{word:'chef',symbol:'👩‍🍳'}]});
english[10].questions.push({type:'gap',en:'She is a teacher',it:'Lei è un’insegnante',prompt:'She ___ a teacher.',answer:'is',options:['is','are','am']});

const puzzle=(title,questions)=>({title,subtitle:'Allenamento guidato',questions:questions.map(q=>({type:'chess',...q}))});
chessLessons.push(
 puzzle('Cattura le stelle',[
  {piece:'torre',from:'d2',to:'a7',fen:'7k/8/8/8/8/8/3R4/K7 w - - 0 1',stars:['d7','a7'],goal:'stars',explanation:'Raccogli le stelle con la torre: prima lungo la colonna, poi lungo la traversa.'},
  {piece:'alfiere',from:'c3',to:'c7',fen:'7k/8/8/8/8/2B5/8/K7 w - - 0 1',stars:['e5','c7'],goal:'stars',explanation:'Segui le diagonali con l’alfiere per raccogliere entrambe le stelle.'},
  {piece:'cavallo',from:'d4',to:'h4',fen:'7k/8/8/8/3N4/8/8/K7 w - - 0 1',stars:['f5','h4'],goal:'stars',explanation:'Il cavallo salta a L: due caselle in una direzione e una nell’altra.'}]),
 puzzle('L’arrocco',[
  {piece:'re',from:'e1',to:'g1',fen:'4k3/8/8/8/8/8/8/4K2R w K - 0 1',explanation:'Nell’arrocco corto il re va in g1 e la torre in f1. Non puoi arroccare sotto scacco o attraversando caselle attaccate.'},
  {piece:'re',from:'e1',to:'c1',fen:'4k3/8/8/8/8/8/8/R3K3 w Q - 0 1',explanation:'Nell’arrocco lungo il re va in c1 e la torre in d1.'}]),
 puzzle('Promuovi un pedone',[
  {piece:'pedone',from:'a7',to:'a8',fen:'7k/P7/8/8/8/8/8/4K3 w - - 0 1',explanation:'Un pedone che raggiunge l’ultima traversa diventa regina, torre, alfiere o cavallo. Qui scegliamo la regina.'},
  {piece:'pedone',from:'d7',to:'d8',fen:'7k/3P4/8/8/8/8/8/4K3 w - - 0 1',explanation:'La promozione ti permette di ottenere un nuovo pezzo.'}]),
 puzzle('En passant',[
  {piece:'pedone',from:'e5',to:'d6',fen:'7k/8/8/3pP3/8/8/8/K7 w - d6 0 1',explanation:'Subito dopo il doppio passo del pedone avversario puoi catturarlo en passant, come se fosse avanzato di una sola casella.'}]),
 puzzle('Salva il tuo re',[
  {piece:'re',from:'e1',to:'f1',fen:'4r2k/8/8/8/8/8/8/4K3 w - - 0 1',explanation:'Quando sei sotto scacco devi eliminare la minaccia. Qui il re si sposta su f1, una casella sicura.'},
  {piece:'alfiere',from:'c3',to:'e5',fen:'4r2k/8/8/8/8/2B5/8/4K3 w - - 0 1',explanation:'Puoi parare uno scacco interponendo un pezzo: l’alfiere su e5 blocca la torre.'}]),
 puzzle('Forchetta di cavallo',[
  {piece:'cavallo',from:'d4',to:'f5',fen:'8/6k1/8/7r/3N4/8/8/K7 w - - 0 1',goal:'check',explanation:'Il cavallo su f5 attacca sia il re g7 sia la torre h6? Controlla sempre le caselle effettivamente attaccate.'}])
);
// La torre deve trovarsi in h6 perché la forchetta f5 attacchi entrambi i pezzi.
chessLessons.at(-1).questions[0].fen='8/6k1/7r/8/3N4/8/8/K7 w - - 0 1';
chessLessons.at(-1).questions[0].explanation='Il cavallo su f5 attacca contemporaneamente il re g7 e la torre h6: una forchetta.';

export const stories=[
 {title:'Un tavolo per due',lines:[['Waiter','Good evening. A table for two?'],['Anna','Yes, please. We are very hungry.'],['Waiter','Here is the menu.'],['Leo','I would like some soup.'],['Anna','And a glass of water, please.']],question:'Che cosa ordina Leo?',options:['Una zuppa','Un caffè','Una pizza'],answer:0},
 {title:'La chiave scomparsa',lines:[['Emma','I cannot find my keys.'],['Alex','Did you check your bag?'],['Emma','Yes. They are not there.'],['Alex','Look! They are on the table.'],['Emma','Thank you. Now we can leave.']],question:'Dove sono le chiavi?',options:['Sul tavolo','Nella borsa','In giardino'],answer:0},
 {title:'La partita',lines:[['Leo','Would you like to play chess?'],['Anna','Yes, but I am a beginner.'],['Leo','Do not worry. I can teach you.'],['Anna','How does the knight move?'],['Leo','It moves in an L shape.']],question:'Che cosa vuole imparare Anna?',options:['Come si muove il cavallo','Come si ordina al ristorante','Come si compra un libro'],answer:0},
 {title:'Il treno in ritardo',lines:[['Emma','Our train is late.'],['Alex','We have twenty minutes.'],['Emma','Let us get a coffee.'],['Alex','Good idea. The café is next to the station.'],['Emma','I will have a small coffee.']],question:'Dove si trova il bar?',options:['Accanto alla stazione','In aeroporto','Vicino al parco'],answer:0}
];

export const normalize=text=>String(text).normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:]/g,'').replace(/\s+/g,' ').trim();
export function makeQuestions(lesson,mode='mixed',round=0,learningNode=null){
 const types=['choice','build','write','dictation','match'];
 const pool=lesson.questions;
 const selected=learningNode!==null?(nodeSessions(lesson,learningNode)[round]||[]):pool.slice(0,12);
 return selected.map((q,i)=>q.type==='chess'||['concept','comprehension'].includes(q.type)||(mode==='mixed'&&['picture','gap'].includes(q.type))?{...q}:{...q,type:mode==='mixed'?(q.practiceType||types[(i+round)%types.length]):mode});
}
