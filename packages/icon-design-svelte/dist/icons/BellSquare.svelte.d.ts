import { SvelteComponent } from 'svelte';

export interface BellSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSquare extends SvelteComponent<BellSquareProps> {}
