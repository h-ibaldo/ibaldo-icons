import { SvelteComponent } from 'svelte';

export interface TouchSwipeUpSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeUpSquare extends SvelteComponent<TouchSwipeUpSquareProps> {}
