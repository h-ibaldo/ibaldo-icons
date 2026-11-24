import { SvelteComponent } from 'svelte';

export interface ArrowRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightSquare extends SvelteComponent<ArrowRightSquareProps> {}
