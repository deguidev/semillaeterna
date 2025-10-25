# Script para limpiar enlaces bíblicos y dejar solo el texto
$filePath = "d:\dlp_project\dlp_project\dlp_astro\semillaeterna\src\content\docs\ensenanzas-practicas\vida-espiritual\oracion-que-transforma.mdx"

# Leer el contenido
$content = Get-Content $filePath -Raw -Encoding UTF8

# Patrón para encontrar enlaces HTML de BibleGateway y extraer solo el texto
$pattern = '<a href="https://www\.biblegateway\.com/passage/\?search=[^"]+&version=RVR1960" target="_blank">([^<]+)</a>'

# Reemplazar con solo el texto de la referencia
$cleanedContent = $content -replace $pattern, '$1'

# Guardar el archivo limpio
$cleanedContent | Set-Content $filePath -Encoding UTF8 -NoNewline

Write-Host "✓ Enlaces eliminados. El componente Markmap los generará automáticamente."
