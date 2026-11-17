import { SvelteComponent } from 'svelte';

export interface FontPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FontPlus extends SvelteComponent<FontPlusProps> {}
