import { SvelteComponent } from 'svelte';

export interface TouchSwipeLeftSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeLeftSquare extends SvelteComponent<TouchSwipeLeftSquareProps> {}
