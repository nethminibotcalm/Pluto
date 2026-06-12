# rename_assets.ps1
# Usage: run from repository root (c:\Users\nethm\Desktop\BotCalmAssignment)
# Powershell: powershell -ExecutionPolicy Bypass -File .\pluto\scripts\rename_assets.ps1

$RepoRoot = (Get-Location).Path
$ImagesDir = Join-Path $RepoRoot 'Images'
$AssetsDir = Join-Path $RepoRoot 'pluto\src\assets'

if (-not (Test-Path $ImagesDir)) {
  Write-Error "Images folder not found: $ImagesDir"
  exit 1
}

New-Item -ItemType Directory -Force -Path $AssetsDir | Out-Null

# Mapping: hashed filename => new filename
$mapping = @{
  '0279047fee7219254bb143640436b65a7b90429b.gif' = 'astronaut-sticker-1.gif'
  '030af40088b3113ad0028cf6dc60651303043eff.png' = 'astronaut-floating-1.png'
  '2d878d6029910721f53bc86741e0254c673f7c48.png' = 'hero-bg.png'
  '4633e431c7d35d8c3f07de11b6e423672a683c77.png' = 'astronaut-standing-1.png'
  '4709301a24d52a34f14f8323b909737210540395.png' = 'astronaut-tiger-wave.png'
  '6de83755037dce103dea3c0417d5acb997f98004.png' = 'hero-illustration.png'
  '7a01e0f1b9c4752b0721fa903d0f1ddc0be35bea.png' = 'astronaut-tiger-floating.png'
  '90953b20ee3c9020cdcc357dbaa7cc0b9fe3f309.png' = 'planets-painting.png'
  '9a15e28d0ce8aa7dcf1252b3fa10b9583fb8ba37.png' = 'mobile-mockup.png'
  'a6fde37674427b2d9a793e83cb75f15d17f4337e.png' = 'astronaut-tiger-head.png'
  'c24be3ffa60102a72ad439b83c85532d1655cd41.gif' = 'astronaut-sticker-2.gif'
  'f6cbd2ca1bfe2ff5c14b2a442aa9674affcf80d3.png' = 'planet-small-1.png'
}

# Move files
foreach ($old in $mapping.Keys) {
  $src = Join-Path $ImagesDir $old
  $dest = Join-Path $AssetsDir $mapping[$old]
  if (Test-Path $src) {
    Write-Host "Moving $old -> $dest"
    Move-Item -Path $src -Destination $dest -Force
  } else {
    Write-Warning "Source file not found, skipping: $src"
  }
}

# Update imports/references across source files (replace hashed filenames with new names)
$codeRoot = Join-Path $RepoRoot 'pluto\src'
$exts = @('*.js','*.jsx','*.ts','*.tsx','*.css')

$files = Get-ChildItem -Path $codeRoot -Recurse -Include $exts -File -ErrorAction SilentlyContinue

foreach ($pair in $mapping.GetEnumerator()) {
  $oldName = $pair.Key
  $newName = $pair.Value
  foreach ($f in $files) {
    (Get-Content $f.FullName -Raw) -replace [regex]::Escape($oldName), $newName | Set-Content $f.FullName
  }
}

Write-Host "Done. Moved files to $AssetsDir and updated references in $codeRoot" -ForegroundColor Green
Write-Host "If you want to archive the remaining Images, consider moving them to Images\\archive." -ForegroundColor Yellow
