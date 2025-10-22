// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// Importar configuraciones modulares del sidebar desde cada carpeta de contenido
import { sidebarPredicas } from './src/content/docs/predicas/sidebar.config.ts';
import { sidebarSermones } from './src/content/docs/sermones/sidebar.config.ts';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		starlight({
			title: 'My Docs',
			social: [
				{ icon: 'github', label: 'Github', href: 'https://github.com/paularmstrong/onerepo' },
				{ icon: 'discord', label: 'Discord', href: 'https://onerepo.tools/discord/' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				sidebarPredicas,
				sidebarSermones,
			],
		}),
	],
});
