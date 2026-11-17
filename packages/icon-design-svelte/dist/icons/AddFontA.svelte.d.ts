import { SvelteComponent } from 'svelte';

export interface AddFontAProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddFontA extends SvelteComponent<AddFontAProps> {}
