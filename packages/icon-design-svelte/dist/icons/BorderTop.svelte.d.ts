import { SvelteComponent } from 'svelte';

export interface BorderTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BorderTop extends SvelteComponent<BorderTopProps> {}
