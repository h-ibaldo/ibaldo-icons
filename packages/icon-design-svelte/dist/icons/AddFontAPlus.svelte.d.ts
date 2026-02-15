import { SvelteComponent } from 'svelte';

export interface AddFontAPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddFontAPlus extends SvelteComponent<AddFontAPlusProps> {}
