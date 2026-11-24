import { SvelteComponent } from 'svelte';

export interface ArrowUturnRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnRightSquare extends SvelteComponent<ArrowUturnRightSquareProps> {}
