import { SvelteComponent } from 'svelte';

export interface LinkOffSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkOffSquare extends SvelteComponent<LinkOffSquareProps> {}
