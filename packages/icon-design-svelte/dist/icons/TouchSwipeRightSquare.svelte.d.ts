import { SvelteComponent } from 'svelte';

export interface TouchSwipeRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeRightSquare extends SvelteComponent<TouchSwipeRightSquareProps> {}
