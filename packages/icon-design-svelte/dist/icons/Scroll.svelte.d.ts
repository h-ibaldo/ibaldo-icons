import { SvelteComponent } from 'svelte';

export interface ScrollProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scroll extends SvelteComponent<ScrollProps> {}
