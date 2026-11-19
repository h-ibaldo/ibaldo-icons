import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Pirilampo', 'sans-serif'],
			},
            fontSize: {
                xs: ['0.65rem', { lineHeight: '1rem' }],
                sm: ['0.8rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
            },
			fontWeight: {
				// Pirilampo is variable (300-700): 350 is a "book" weight for large text
				book: '350',
				semibold: '500',
				bold: '600',
			},
			colors: {
				indigo: {
					50: '#e6e6ff',
					100: '#ccccff',
					200: '#9999ff',
					300: '#6666ff',
					400: '#3333ff',
					500: '#0900FF',
					600: '#0700CC',
					700: '#050099',
					800: '#040066',
					900: '#020033',
					950: '#010019',
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries]
};
