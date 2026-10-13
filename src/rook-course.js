import {Chess} from 'chess.js';
import {chessLessons} from './data.js';

function position(from,extra=[]){const board=new Chess();board.clear();board.put({type:'k',color:'w'},'a1');board.put({type:'k',color:'b'},'h8');board.put({type:'r',color:'w'},from);for(const [square,type,color] of extra)board.put({type,color},square);return board.fen();}
const stages=[
 {title:'Muovi in verticale',rows:[['d2','d6'],['b3','b7'],['f2','f5']],rule:'La torre percorre una colonna senza cambiare lettera. Tutte le caselle attraversate devono essere libere.'},
 {title:'Muovi in orizzontale',rows:[['c4','g4'],['e5','b5'],['b6','f6']],rule:'La torre percorre una traversa senza cambiare numero. Puo’ muoversi in entrambe le direzioni.'},
 {title:'Fermati prima di un ostacolo',rows:[['c2','c4',[['c5','p','w']]],['f3','f5',[['f6','p','w']]],['b4','e4',[['f4','p','w']]]],rule:'La torre non salta sopra i pezzi. Un pezzo bianco blocca la linea: fermati prima dell’ostacolo.'},
 {title:'Cattura un pezzo',rows:[['d3','d6',[['d6','p','b']]],['b5','e5',[['e5','p','b']]],['f2','f7',[['f7','n','b']]]],goal:'capture',rule:'La torre cattura un pezzo avversario raggiungendo la sua casella lungo una linea libera.'},
 {title:'Dai scacco con la torre',rows:[['d4','h4'],['c6','c8'],['g2','h2']],goal:'check',rule:'Allinea la torre al re nero lungo una riga o una colonna libera: il re viene attaccato.'}
];
chessLessons[0].questions=stages.flatMap((stage,lesson)=>stage.rows.map(([from,to,extra=[]])=>({type:'chess',piece:'torre',from,to,fen:position(from,extra),goal:stage.goal,stage:stage.title,explanation:stage.rule,lesson})));
