$ErrorActionPreference = 'Stop'
$lingoUrl = 'http://127.0.0.1:5187'
$lingoReady = $false
try {
    $response = Invoke-WebRequest $lingoUrl -TimeoutSec 2
    $lingoReady = $response.Content -match 'Lingo'
} catch {}
if (-not $lingoReady) {
    $viteCli = Join-Path $PSScriptRoot 'node_modules\vite\bin\vite.js'
    if (-not (Test-Path -LiteralPath $viteCli)) {
        Push-Location $PSScriptRoot
        try {
            & npm ci
            if ($LASTEXITCODE -ne 0) { throw 'Installazione dipendenze fallita.' }
        } finally { Pop-Location }
    }
    $nodeExe = (Get-Command node -ErrorAction Stop).Source
    Start-Process -FilePath $nodeExe -ArgumentList @(('"' + $viteCli + '"'), '--host', '127.0.0.1', '--port', '5187', '--strictPort') -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
    for ($attempt = 0; $attempt -lt 20; $attempt++) {
        Start-Sleep -Milliseconds 300
        try {
            $response = Invoke-WebRequest $lingoUrl -TimeoutSec 1
            if ($response.Content -match 'Lingo') { $lingoReady = $true; break }
        } catch {}
    }
}
if (-not $lingoReady) { throw 'Avvio di Lingo fallito. Controlla che la porta 5187 sia libera.' }
Start-Process $lingoUrl
