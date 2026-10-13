import asyncio, hashlib, json
from pathlib import Path
import edge_tts
root=Path(__file__).resolve().parents[1]
out=root/'public/audio/en-US'
out.mkdir(parents=True,exist_ok=True)
texts=json.loads((root/'qa/audio-testi.json').read_text(encoding='utf-8'))
manifest={}
failures=[]
gate=asyncio.Semaphore(4)
async def generate(text):
 filename=hashlib.sha256(text.encode()).hexdigest()[:20]+'.mp3'
 path=out/filename
 async with gate:
  for attempt in range(3):
   try:
    if not path.exists() or path.stat().st_size<1000:
     await asyncio.wait_for(edge_tts.Communicate(text,'en-US-AriaNeural',rate='-5%').save(str(path)),timeout=35)
    manifest[text]='/audio/en-US/'+filename
    if len(manifest)%25==0:print(f'Audio pronti: {len(manifest)}/{len(texts)}',flush=True)
    return
   except Exception as e:
    if attempt==2:failures.append({'text':text,'error':type(e).__name__})
    else:await asyncio.sleep(1+attempt)
async def main():
 await asyncio.gather(*(generate(t) for t in texts))
 (root/'public/audio/manifest.json').write_text(json.dumps({'voice':'en-US-AriaNeural','locale':'en-US','clips':manifest},ensure_ascii=False,indent=2),encoding='utf-8')
 (root/'qa/audio-generazione.json').write_text(json.dumps({'ready':len(manifest),'total':len(texts),'failures':failures},ensure_ascii=False,indent=2),encoding='utf-8')
 print(f'Completato: {len(manifest)}/{len(texts)}. Errori: {len(failures)}',flush=True)
asyncio.run(main())
