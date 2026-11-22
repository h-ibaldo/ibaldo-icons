import { SvelteComponent } from 'svelte';

export interface ArrowDiagonalOutLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDiagonalOutLeft extends SvelteComponent<ArrowDiagonalOutLeftProps> {}
