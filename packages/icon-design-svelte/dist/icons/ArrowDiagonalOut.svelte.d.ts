import { SvelteComponent } from 'svelte';

export interface ArrowDiagonalOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDiagonalOut extends SvelteComponent<ArrowDiagonalOutProps> {}
