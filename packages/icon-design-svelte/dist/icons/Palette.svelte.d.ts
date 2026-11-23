import { SvelteComponent } from 'svelte';

export interface PaletteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Palette extends SvelteComponent<PaletteProps> {}
