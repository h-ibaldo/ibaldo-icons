import { SvelteComponent } from 'svelte';

export interface MinusSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusSquare extends SvelteComponent<MinusSquareProps> {}
