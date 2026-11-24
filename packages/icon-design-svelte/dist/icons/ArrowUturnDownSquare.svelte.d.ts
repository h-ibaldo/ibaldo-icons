import { SvelteComponent } from 'svelte';

export interface ArrowUturnDownSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnDownSquare extends SvelteComponent<ArrowUturnDownSquareProps> {}
