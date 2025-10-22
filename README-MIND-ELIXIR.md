# Mind Elixir Integration

## Instalación

El paquete `mind-elixir` está instalado pero requiere configuración manual para los estilos CSS.

## Archivos

- **Componente**: `src/components/MindElixir.astro`
- **CSS**: `public/mind-elixir.css` (copiado desde `node_modules/mind-elixir/dist/MindElixir.css`)
- **Ejemplo**: `src/content/docs/predicas/example.mdx`

## Uso

```astro
---
import MindElixir from '../../../components/MindElixir.astro';
---

<MindElixir id="mi-mapa" height="600px" />
```

## Datos Personalizados

```astro
<MindElixir 
  id="custom-map" 
  height="500px"
  data={{
    nodeData: {
      id: 'root',
      topic: 'Mi Tema',
      root: true,
      children: [
        { id: '1', topic: 'Subtema 1', direction: 0 },
        { id: '2', topic: 'Subtema 2', direction: 1 }
      ]
    }
  }}
/>
```

## Nota Importante

Si actualizas el paquete `mind-elixir`, debes volver a copiar el CSS:

```bash
copy node_modules\mind-elixir\dist\MindElixir.css public\mind-elixir.css
```
