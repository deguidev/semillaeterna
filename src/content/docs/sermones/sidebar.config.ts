import type { SidebarConfig } from '@/types/sidebar';

/**
 * Configuración del sidebar para la sección de Sermones
 */
export const sidebarSermones: SidebarConfig = {
	label: 'Sermones',
	items: [
		// Agrega los items de sermones aquí
		// { label: 'Sermón 1', slug: 'sermones/sermon-1' },
		// { label: 'Sermón 2', slug: 'sermones/sermon-2' },
	],
	// O usa autogenerate si prefieres generar automáticamente desde la carpeta
	// autogenerate: { directory: 'sermones' },
};
