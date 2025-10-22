/**
 * Tipos para la configuración del sidebar de Starlight
 */

export interface SidebarLink {
	label: string;
	slug: string;
	badge?: string | { text: string; variant?: 'note' | 'tip' | 'caution' | 'danger' | 'success' };
}

export interface SidebarGroup {
	label: string;
	items: Array<SidebarLink | SidebarGroup | SidebarAutogenerate>;
	collapsed?: boolean;
}

export interface SidebarAutogenerate {
	label: string;
	autogenerate: {
		directory: string;
		collapsed?: boolean;
	};
}

export type SidebarConfig = SidebarGroup;
