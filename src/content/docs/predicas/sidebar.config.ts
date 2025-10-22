import type { SidebarConfig } from '@/types/sidebar';

/**
 * Configuración del sidebar para la sección de Prédicas
 */
export const sidebarPredicas: SidebarConfig = {
    label: 'Prédicas',
    items: [
        {
            label: 'Fundamentos de la Fe',
            collapsed: true,
            items: [
                { label: 'Salvación', slug: 'predicas/fundamentos-fe/salvacion' },
            ]
        },
    ],
};
