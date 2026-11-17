import { SvelteComponent } from 'svelte';

export interface PointerSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerSquare extends SvelteComponent<PointerSquareProps> {}
