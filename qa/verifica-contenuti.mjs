import assert from 'node:assert/strict';
import { Chess } from 'chess.js';
import { chessLessons, english } from '../src/data.js';
import { normalize, makeQuestions, stories } from '../src/catalog.js';
import '../src/expanded-lessons.js';
import '../src/rook-course.js';
import {learningSessions,nodeSessions} from '../src/lesson-plan.js';

let count = 0;
for (const lesson of chessLessons) {
  for (const q of lesson.questions) {
    const board = new Chess(q.fen);
    if(q.goal === 'stars') {
      let from=q.from;
      for(const to of q.stars){assert.ok(board.move({from,to,promotion:'q'}));board.load(board.fen().replace(' b ',' w '));from=to;}
    } else assert.ok(board.move({ from: q.from, to: q.to, promotion: 'q' }));
    if (q.goal === 'check') assert.ok(board.isCheck(), `${lesson.title}: scacco`);
    if (q.goal === 'mate') assert.ok(board.isCheckmate(), `${lesson.title}: matto`);
    count++;
  }
}
for (const lesson of english) {
  assert.ok(lesson.questions.length >= 5);
  for (const q of lesson.questions) {
    assert.ok(q.en && q.it);
    assert.ok(['choice', 'listen', 'build','write','dictation','match','picture','gap'].includes(q.type));
  }
}
assert.equal(english.length,44);
assert.equal(chessLessons.length,20);
assert.equal(normalize('Hello, WORLD!'),'hello world');
assert.equal(normalize('  I’m here. '),"i'm here");
for(const lesson of english){
  const original=JSON.stringify(lesson);
  for(const mode of ['mixed','dictation','write','speak','match'])assert.ok(makeQuestions(lesson,mode).every(q=>q.en&&q.it));
  assert.equal(JSON.stringify(lesson),original,'Le sessioni non devono mutare il catalogo');
}
for(const story of stories){assert.ok(story.lines.length>=4);assert.ok(story.options[story.answer]);}
for(const lesson of [...english,...chessLessons]){
 const seen=new Set();
 for(const group of learningSessions(lesson))for(const q of group){const identity=q.type==='chess'?`${q.fen}:${q.from}:${q.to}`:q.en;assert.ok(!seen.has(identity),`${lesson.title}: esercizio ripetuto tra sessioni`);seen.add(identity);}
 const uniqueCount=new Set(lesson.questions.map(q=>q.type==='chess'?`${q.fen}:${q.from}:${q.to}`:q.en)).size;
 assert.equal(seen.size,uniqueCount,`${lesson.title}: ogni contenuto distinto deve essere presente nella progressione`);
}
assert.equal(nodeSessions(chessLessons[0],0).length,5);
assert.equal(new Set(chessLessons[0].questions.map(q=>q.fen)).size,15);
assert.equal(new Set(chessLessons[0].questions.map(q=>q.stage)).size,5);
const firstEnglish=makeQuestions(english[28],'mixed',0,0),secondEnglish=makeQuestions(english[28],'mixed',1,0);
assert.ok(firstEnglish.length&&secondEnglish.length);
assert.ok(!firstEnglish.some(q=>secondEnglish.some(p=>p.en===q.en)),'Le due lezioni di bevande devono avere frasi diverse');
for(const lesson of chessLessons)for(const q of lesson.questions)if(q.goal==='capture'){const board=new Chess(q.fen);assert.ok(board.move({from:q.from,to:q.to,promotion:'q'}).captured);}
assert.notDeepEqual(makeQuestions(english[8],'mixed',0),makeQuestions(english[8],'mixed',1),'Le lezioni interne devono avere selezioni diverse');
console.log(`${count} puzzle scacchistici validi, ${english.length} capitoli inglesi, ${english.reduce((n,l)=>n+l.questions.length,0)} frasi, ${stories.length} storie. Mosse speciali e raccolte stelle verificate.`);
