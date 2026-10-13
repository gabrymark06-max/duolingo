import {english} from '../src/data.js';
import {stories} from '../src/catalog.js';
import '../src/expanded-lessons.js';
import '../src/english-curriculum.js';
import '../src/english-projects.js';
import {writeFileSync} from 'node:fs';
const texts=[...english.flatMap(l=>[...l.questions,...(l.assessment||[])].map(q=>q.en).filter(Boolean)),...stories.map(s=>s.lines.map(x=>x[1]).join(' ')),...stories.flatMap(s=>s.lines.map(x=>x[1])),...['sheep','ship','cat','car','cup','book','blue','bed','teacher','door','think','this','shoe','chess','job','sing']];
writeFileSync(new URL('audio-testi.json',import.meta.url),JSON.stringify([...new Set(texts)],null,2));
