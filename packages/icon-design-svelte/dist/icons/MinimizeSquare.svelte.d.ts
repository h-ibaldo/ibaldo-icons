import { SvelteComponent } from 'svelte';

export interface MinimizeSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinimizeSquare extends SvelteComponent<MinimizeSquareProps> {}
