export const questionId=q=>q.id||`${q.type==='chess'?`${q.fen}:${q.from}:${q.to}`:q.en||q.prompt}`;
const intervals=[1,3,7,14,30,60];
export function recordAttempt(progress,course,chapter,q,correct,now=Date.now()){
 const id=`${course}:${questionId(q)}`,previous=progress[id]||{stage:0,attempts:0,successes:0};
 const stage=correct?Math.min(previous.stage+1,intervals.length):0;
 progress[id]={...previous,course,chapter,q,stage,attempts:previous.attempts+1,successes:previous.successes+Number(correct),due:now+(correct?intervals[stage-1]*86400000:600000),last:now};
}
export function dueQuestions(progress,course,now=Date.now(),limit=12){return Object.values(progress).filter(x=>x.course===course&&x.due<=now).sort((a,b)=>a.due-b.due).slice(0,limit);}
export function assessmentResult(answers){const score=answers.length?answers.filter(Boolean).length/answers.length:0;return {score,passed:answers.length>=3&&score>=.8};}
const contractions={"i'm":"i am","you're":"you are","we're":"we are","they're":"they are","he's":"he is","she's":"she is","it's":"it is","isn't":"is not","aren't":"are not","don't":"do not","doesn't":"does not","didn't":"did not","can't":"cannot","won't":"will not","wasn't":"was not","weren't":"were not","haven't":"have not","hasn't":"has not","wouldn't":"would not","shouldn't":"should not","mustn't":"must not","couldn't":"could not","i'll":"i will","you'll":"you will","we'll":"we will","they'll":"they will","i've":"i have","you've":"you have","we've":"we have","they've":"they have"};
function answerForms(text){
 const base=String(text).normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:]/g,'').replace(/\s+/g,' ').trim();
 const candidates=new Set([base]);
 for(const [short,longs]of Object.entries({"he's":['he is','he has'],"she's":['she is','she has'],"it's":['it is','it has'],"i'd":['i would','i had'],"you'd":['you would','you had'],"we'd":['we would','we had'],"they'd":['they would','they had']}))for(const candidate of [...candidates])if(candidate.includes(short))for(const long of longs)candidates.add(candidate.replace(new RegExp(`\\b${short}\\b`,'g'),long));
 const forms=new Set(candidates);
 for(let candidate of candidates){for(const [short,long]of Object.entries(contractions))candidate=candidate.replace(new RegExp(`\\b${short}\\b`,'g'),long);forms.add(candidate.replace(/\bcan not\b/g,'cannot'));}
 return forms;
}
export function answersEquivalent(answer,q){const actual=answerForms(answer);return [q.en,...(q.accepted||[])].some(expected=>[...answerForms(expected)].some(x=>actual.has(x)));}
export function chessGoalSatisfied(q,board,move){
 if(!move)return false;
 if(q.goal==='mate')return board.isCheckmate();
 if(q.goal==='check')return board.isCheck();
 if(q.goal==='fork')return board.isCheck()&&q.targets.every(square=>board.attackers(square,'w').includes(move.to));
 if(q.goal==='capture')return move.from===q.from&&Boolean(board.history({verbose:true}).at(-1)?.captured);
 return move.from===q.from&&move.to===q.to;
}
