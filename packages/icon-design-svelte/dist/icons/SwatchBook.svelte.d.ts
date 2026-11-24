import { SvelteComponent } from 'svelte';

export interface SwatchBookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwatchBook extends SvelteComponent<SwatchBookProps> {}
