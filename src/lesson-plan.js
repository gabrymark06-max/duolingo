// Lezioni originali locali: un contenuto nuovo compare in una sola sessione
// del percorso. Il ripasso puo' riprenderlo deliberatamente.
import {questionId} from './study-engine.js';
export function learningSessions(lesson){
 const size=lesson.questions[0]?.type==='chess'?3:4;
 const unique=[...new Map(lesson.questions.map(q=>[questionId(q),q])).values()];
 return Array.from({length:Math.ceil(unique.length/size)},(_,i)=>unique.slice(i*size,(i+1)*size));
}
export function nodeSessions(lesson,ordinal){return learningSessions(lesson).slice(ordinal*5,ordinal*5+5);}
