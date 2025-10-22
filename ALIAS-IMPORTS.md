# Alias de Importación con @

Este proyecto está configurado para usar **alias de importación** con `@` en lugar de rutas relativas complicadas.

## Alias Disponibles

```typescript
@/*              → src/*
@components/*    → src/components/*
@layouts/*       → src/layouts/*
@config/*        → src/config/*
@content/*       → src/content/*
```

## Ejemplos de Uso

### ❌ Antes (rutas relativas)

```typescript
import MindElixir from '../../../components/MindElixir.astro';
import type { SidebarConfig } from '../../../types/sidebar';
import MainLayout from '../../layouts/MainLayout.astro';
```

### ✅ Ahora (con alias)

```typescript
import MindElixir from '@components/MindElixir.astro';
import type { SidebarConfig } from '@/types/sidebar';
import MainLayout from '@layouts/MainLayout.astro';
```

## Ventajas

✅ **Más limpio**: Sin `../../../` confusos
✅ **Más fácil de leer**: Sabes exactamente de dónde viene cada import
✅ **Más mantenible**: Si mueves archivos, los imports no se rompen
✅ **Autocompletado**: Tu editor te ayuda con las rutas

## Uso en Diferentes Archivos

### En archivos MDX (contenido)

```mdx
---
title: Mi Página
---

import MindElixir from '@components/MindElixir.astro';
import CustomComponent from '@components/CustomComponent.astro';

<MindElixir id="mi-mapa" />
```

### En archivos de configuración

```typescript
import type { SidebarConfig } from '@/types/sidebar';

export const sidebarPredicas: SidebarConfig = {
  label: 'Prédicas',
  items: [...]
};
```

### En componentes Astro

```astro
---
import Layout from '@layouts/MainLayout.astro';
import Header from '@components/Header.astro';
---

<Layout>
  <Header />
  <slot />
</Layout>
```

## Configuración

Los alias están configurados en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@config/*": ["src/config/*"],
      "@content/*": ["src/content/*"]
    }
  }
}
```

## Nota sobre @types

⚠️ **No uses `@types/*`** como alias porque entra en conflicto con el directorio de tipos de TypeScript.

En su lugar, usa `@/types/*` para acceder a tus tipos personalizados:

```typescript
// ✅ Correcto
import type { SidebarConfig } from '@/types/sidebar';

// ❌ Incorrecto (conflicto con @types de npm)
import type { SidebarConfig } from '@types/sidebar';
```

## Agregar Nuevos Alias

Para agregar un nuevo alias, edita `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@miCarpeta/*": ["src/miCarpeta/*"]  // ← Nuevo alias
    }
  }
}
```

Luego reinicia tu servidor de desarrollo y el editor TypeScript.
