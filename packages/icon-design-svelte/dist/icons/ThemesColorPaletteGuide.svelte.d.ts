import { SvelteComponent } from 'svelte';

export interface ThemesColorPaletteGuideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ThemesColorPaletteGuide extends SvelteComponent<ThemesColorPaletteGuideProps> {}
