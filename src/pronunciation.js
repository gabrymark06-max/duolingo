let player=null,request=0;
const catalog=fetch('/audio/manifest.json').then(r=>r.ok?r.json():null).catch(()=>null);
export function stopPronunciation(){request++;player?.pause();player?.remove();player=null;window.speechSynthesis?.cancel();}
export function chooseEnglishVoice(voices){return voices.filter(v=>/^en[-_]/i.test(v.lang)).sort((a,b)=>score(b)-score(a))[0];}
function score(v){return (/en-US/i.test(v.lang)?20:0)+(/natural|neural|aria|jenny|samantha|google/i.test(v.name)?50:0);}
async function englishVoice(){const synth=window.speechSynthesis;if(!synth)return null;let voice=chooseEnglishVoice(synth.getVoices());if(voice)return voice;await new Promise(resolve=>{const done=()=>{clearTimeout(timer);synth.removeEventListener('voiceschanged',done);resolve();};const timer=setTimeout(done,1800);synth.addEventListener('voiceschanged',done);});return chooseEnglishVoice(synth.getVoices());}
export async function playEnglish(text,{slow=false,onError=()=>{}}={}){
 stopPronunciation();const ticket=request;
 const manifest=await catalog;if(ticket!==request)return;
 const clip=manifest?.clips[text];
 if(clip){const audio=new Audio(clip);audio.hidden=true;audio.dataset.pronunciationPlayer='en-US-AriaNeural';document.body.append(audio);player=audio;audio.playbackRate=slow?.75:1;audio.preservesPitch=true;audio.addEventListener('ended',()=>audio.remove());try{await audio.play();return;}catch{audio.remove();if(ticket!==request)return;}}
 const voice=await englishVoice();if(ticket!==request)return;
 if(!voice){onError('Voce inglese non disponibile. Usa il testo oppure riprova l’audio.');return;}
 const utterance=new SpeechSynthesisUtterance(text);utterance.lang=voice.lang;utterance.voice=voice;utterance.rate=slow?.7:.95;utterance.pitch=1;utterance.onerror=()=>onError('Audio non disponibile. Riprova.');window.speechSynthesis.speak(utterance);
}
