import { SvelteComponent } from 'svelte';

export interface SuperscriptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Superscript extends SvelteComponent<SuperscriptProps> {}
