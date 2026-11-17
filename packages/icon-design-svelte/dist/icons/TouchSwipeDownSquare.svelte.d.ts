import { SvelteComponent } from 'svelte';

export interface TouchSwipeDownSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeDownSquare extends SvelteComponent<TouchSwipeDownSquareProps> {}
