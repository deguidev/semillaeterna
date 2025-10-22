# Configuración Modular del Sidebar

## Estructura

Cada sección de contenido tiene su propio archivo de configuración del sidebar en TypeScript, ubicado en la raíz de su carpeta correspondiente:

```
src/content/docs/
├── predicas/
│   ├── sidebar.config.ts    # Configuración del sidebar de Prédicas
│   └── example.mdx
├── sermones/
│   └── sidebar.config.ts    # Configuración del sidebar de Sermones
```

## Cómo Funciona

### 1. Archivo de Configuración (sidebar.config.ts)

Cada carpeta de contenido tiene un archivo `sidebar.config.ts` en su raíz con **tipado TypeScript completo**:

```typescript
import type { SidebarConfig } from '@/types/sidebar';

/**
 * Configuración del sidebar para [Nombre de la Sección]
 */
export const sidebar[Nombre]: SidebarConfig = {
	label: 'Nombre de la Sección',
	items: [
		{ label: 'Item 1', slug: 'seccion/item-1' },
		{ label: 'Item 2', slug: 'seccion/item-2' },
	],
};
```

**Ventajas del tipado:**
- ✅ Autocompletado en el editor
- ✅ Validación de tipos en tiempo de desarrollo
- ✅ Documentación inline de propiedades disponibles

### 2. Importación en astro.config.mjs

Los sidebars se importan y agregan al array principal:

```javascript
import { sidebarPredicas } from './src/content/docs/predicas/sidebar.config.ts';
import { sidebarSermones } from './src/content/docs/sermones/sidebar.config.ts';

export default defineConfig({
	integrations: [
		starlight({
			sidebar: [
				sidebarPredicas,
				sidebarSermones,
			],
		}),
	],
});
```

## Agregar Nueva Sección

### Paso 1: Crear la carpeta de contenido

```
src/content/docs/nueva-seccion/
```

### Paso 2: Crear sidebar.config.ts

Crea `src/content/docs/nueva-seccion/sidebar.config.ts`:

```typescript
/**
 * Configuración del sidebar para Nueva Sección
 */
export const sidebarNuevaSeccion = {
	label: 'Nueva Sección',
	items: [
		{ label: 'Página 1', slug: 'nueva-seccion/pagina-1' },
	],
};
```

### Paso 3: Importar en astro.config.mjs

```javascript
import { sidebarNuevaSeccion } from './src/content/docs/nueva-seccion/sidebar.config.ts';

export default defineConfig({
	integrations: [
		starlight({
			sidebar: [
				sidebarPredicas,
				sidebarSermones,
				sidebarNuevaSeccion, // ← Agregar aquí
			],
		}),
	],
});
```

## Tipos TypeScript

El proyecto incluye tipos personalizados en `src/types/sidebar.ts`:

```typescript
// Tipo principal para la configuración del sidebar
export type SidebarConfig = SidebarGroup;

// Un grupo con items
export interface SidebarGroup {
	label: string;
	items: Array<SidebarLink | SidebarGroup | SidebarAutogenerate>;
	collapsed?: boolean;
}

// Un link individual
export interface SidebarLink {
	label: string;
	slug: string;
	badge?: string | { text: string; variant?: 'note' | 'tip' | 'caution' | 'danger' | 'success' };
}

// Autogenerate desde carpeta
export interface SidebarAutogenerate {
	label: string;
	autogenerate: {
		directory: string;
		collapsed?: boolean;
	};
}
```

Estos tipos te dan **autocompletado completo** en tu editor y **validación de errores** en tiempo de desarrollo.

## Opciones de Configuración

### Items Manuales

```typescript
import type { SidebarConfig } from '@/types/sidebar';

export const sidebarEjemplo: SidebarConfig = {
	label: 'Mi Sección',
	items: [
		{ label: 'Página 1', slug: 'seccion/pagina-1' },
		{ label: 'Página 2', slug: 'seccion/pagina-2' },
		{
			label: 'Subsección',
			items: [
				{ label: 'Sub-página 1', slug: 'seccion/sub/pagina-1' },
			],
		},
	],
};
```

### Autogenerate (Generación Automática)

```typescript
import type { SidebarConfig } from '@/types/sidebar';

export const sidebarEjemplo: SidebarConfig = {
	label: 'Mi Sección',
	autogenerate: { directory: 'nombre-carpeta' },
};
```

Esto generará automáticamente el sidebar basándose en los archivos dentro de la carpeta.

### Mixto (Manual + Autogenerate)

```typescript
import type { SidebarConfig } from '@/types/sidebar';

export const sidebarEjemplo: SidebarConfig = {
	label: 'Mi Sección',
	items: [
		{ label: 'Introducción', slug: 'seccion/intro' },
		{
			label: 'Tutoriales',
			autogenerate: { directory: 'seccion/tutoriales' },
		},
		{ label: 'Conclusión', slug: 'seccion/conclusion' },
	],
};
```

## Ejemplo Completo

**src/content/docs/predicas/sidebar.config.ts**
```typescript
import type { SidebarConfig } from '@/types/sidebar';

export const sidebarPredicas: SidebarConfig = {
	label: 'Prédicas',
	items: [
		{ label: 'Introducción', slug: 'predicas/intro' },
		{
			label: 'Fundamentos de Fe',
			items: [
				{ label: 'La Salvación', slug: 'predicas/fundamentos/salvacion' },
				{ label: 'La Gracia', slug: 'predicas/fundamentos/gracia' },
			],
		},
		{
			label: 'Vida Cristiana',
			autogenerate: { directory: 'predicas/vida-cristiana' },
		},
	],
};
```

## Ventajas de esta Estructura

✅ **Organizado**: Cada configuración vive junto a su contenido
✅ **TypeScript con tipos personalizados**: Tipado completo, autocompletado y validación
✅ **Escalable**: Fácil agregar nuevas secciones
✅ **Mantenible**: Cambios aislados por sección
✅ **Intuitivo**: La configuración está donde está el contenido
✅ **Seguro**: Errores detectados en tiempo de desarrollo, no en producción

## Archivos Actuales

- `src/types/sidebar.ts` - **Tipos TypeScript personalizados** para el sidebar
- `src/content/docs/predicas/sidebar.config.ts` - Configuración de Prédicas (con tipos)
- `src/content/docs/sermones/sidebar.config.ts` - Configuración de Sermones (con tipos)
- `astro.config.mjs` - Importa y combina todos los sidebars
