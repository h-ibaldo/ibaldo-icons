import { SvelteComponent } from 'svelte';

export interface ArrowDownLeftSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownLeftSquare extends SvelteComponent<ArrowDownLeftSquareProps> {}
