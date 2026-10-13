import json, subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'public/audio/manifest.json').read_text(encoding='utf-8'))
listing=root/'qa/audio-decodifica.txt'
listing.write_text('\n'.join("file '"+str((root/'public'/url.lstrip('/')).resolve()).replace('\\','/')+"'" for url in data['clips'].values()),encoding='utf-8')
subprocess.run(['ffmpeg','-v','error','-f','concat','-safe','0','-i',str(listing),'-f','null','-'],check=True)
print(f"{len(data['clips'])} file audio decodificati senza errori.")
