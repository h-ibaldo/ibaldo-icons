import { SvelteComponent } from 'svelte';

export interface ThemesColorPaletteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ThemesColorPalette extends SvelteComponent<ThemesColorPaletteProps> {}
