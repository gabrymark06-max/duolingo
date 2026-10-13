import assert from 'node:assert/strict';
import {Chess} from 'chess.js';
import {english,chessLessons} from '../src/data.js';
import {makeQuestions} from '../src/catalog.js';
import '../src/expanded-lessons.js';
import '../src/rook-course.js';
import {englishCurriculum} from '../src/english-curriculum.js';
import '../src/english-projects.js';
import {chessCourseOrder} from '../src/chess-curriculum.js';
import '../src/chess-transfer.js';
import {learningSessions} from '../src/lesson-plan.js';
import {questionId,recordAttempt,dueQuestions,assessmentResult,answersEquivalent,chessGoalSatisfied} from '../src/study-engine.js';
const ids=new Set();let boards=0;
for(const [course,lessons] of Object.entries({english,chess:chessLessons}))for(const l of lessons){
 if(l.structured){assert.ok(l.level&&l.guide.rule&&l.guide.trap&&l.guide.production);assert.ok(l.guide.rubric.length>=3);assert.ok(l.assessment.length>=3);}
 for(const q of [...l.questions,...(l.assessment||[])]){
  if(q.id){assert.ok(!ids.has(q.id),q.id);ids.add(q.id);}
  if(q.type==='concept'||q.type==='comprehension'){assert.ok(q.options[q.answer]);assert.equal(new Set(q.options).size,q.options.length);}
  if(q.type==='gap')assert.ok(q.options.includes(q.answer));
  if(q.type==='chess'){const b=new Chess(q.fen);if(q.goal==='stars'){let from=q.from;for(const to of q.stars){assert.ok(b.move({from,to,promotion:'q'}));b.load(b.fen().replace(' b ',' w '));from=to;}}else assert.ok(b.move({from:q.from,to:q.to,promotion:'q'}));if(q.goal==='mate')assert.ok(b.isCheckmate());if(q.goal==='check')assert.ok(b.isCheck());boards++;}
 }
 const groups=learningSessions(l),seen=new Set();for(const group of groups)for(const q of group){assert.ok(!seen.has(questionId(q)));seen.add(questionId(q));}
 assert.equal(seen.size,new Set(l.questions.map(questionId)).size);
 if(course==='english'&&l.structured){const training=new Set(l.questions.map(q=>q.en).filter(Boolean));for(const q of l.assessment)if(q.en)assert.ok(!training.has(q.en),'Verifica con frasi nuove');assert.ok(makeQuestions(l,'mixed',0,0).length);}
}
assert.equal(englishCurriculum.length,45);assert.deepEqual([...new Set(englishCurriculum.map(i=>english[i].level))],['A1','A2','B1','B2','C1']);
assert.equal(new Set(chessCourseOrder).size,chessLessons.length);assert.ok(chessCourseOrder.every(i=>chessLessons[i]));
const progress={},q=english[44].questions[0],now=1700000000000;
recordAttempt(progress,'english',44,q,true,now);assert.equal(dueQuestions(progress,'english',now).length,0);assert.equal(dueQuestions(progress,'english',now+86400000).length,1);
recordAttempt(progress,'english',44,q,true,now+86400000);assert.equal(Object.values(progress)[0].due,now+4*86400000);
recordAttempt(progress,'english',44,q,false,now+4*86400000);assert.equal(Object.values(progress)[0].stage,0);assert.equal(Object.values(progress)[0].due,now+4*86400000+600000);
assert.equal(dueQuestions(progress,'chess',Infinity).length,0);
assert.equal(assessmentResult([true,true,false]).passed,false);assert.equal(assessmentResult([true,true,true]).passed,true);assert.equal(assessmentResult([true]).passed,false);
assert.ok(answersEquivalent("She doesn't work.",{en:'She does not work'}));assert.ok(answersEquivalent("I'm from Italy",{en:'I am from Italy.'}));assert.ok(!answersEquivalent('I am from Spain',{en:'I am from Italy'}));assert.ok(answersEquivalent('Hi',{en:'Hello',accepted:['Hi']}));
assert.ok(answersEquivalent("He's just arrived",{en:'He has just arrived'}));assert.ok(answersEquivalent("I'd rather stay",{en:'I would rather stay'}));
const fork=chessLessons[26].questions[3],forkBoard=new Chess(fork.fen);forkBoard.move({from:fork.from,to:fork.to});assert.ok(chessGoalSatisfied(fork,forkBoard,{from:fork.from,to:fork.to}));const onlyCheck=new Chess(fork.fen);onlyCheck.move({from:'d4',to:'e6'});assert.ok(onlyCheck.isCheck());assert.ok(!chessGoalSatisfied(fork,onlyCheck,{from:'d4',to:'e6'}),'Uno scacco senza attacco alla torre non è una forchetta');
console.log(`Corso verificato: ${english.length} capitoli inglesi, ${chessLessons.length} scacchi, ${boards} posizioni legali, ${ids.size} identificatori nuovi. Verifiche separate, copertura, ripasso e soglia controllati.`);
