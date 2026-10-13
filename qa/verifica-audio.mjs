import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {chooseEnglishVoice} from '../src/pronunciation.js';
const base=new URL('../public/',import.meta.url);
const manifest=JSON.parse(readFileSync(new URL('audio/manifest.json',base)));
const expected=JSON.parse(readFileSync(new URL('audio-testi.json',import.meta.url)));
assert.equal(manifest.locale,'en-US');
for(const text of expected){const path=manifest.clips[text];assert.ok(path,`Audio mancante: ${text}`);const file=new URL(path.slice(1),base);assert.ok(existsSync(file));const data=readFileSync(file);assert.ok(data.length>1000);assert.ok(data.subarray(0,3).toString()==='ID3'||(data[0]===255&&(data[1]&224)===224),'MP3 valido');}
assert.equal(chooseEnglishVoice([{name:'Italiano',lang:'it-IT'}]),undefined);
assert.equal(chooseEnglishVoice([{name:'Italiano',lang:'it-IT'},{name:'English',lang:'en-US'},{name:'Aria Natural',lang:'en-US'}]).name,'Aria Natural');
console.log(`${expected.length} MP3 presenti; fallback limitato all’inglese e voce naturale preferita.`);
