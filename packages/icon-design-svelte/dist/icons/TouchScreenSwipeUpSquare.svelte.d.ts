import { SvelteComponent } from 'svelte';

export interface TouchScreenSwipeUpSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenSwipeUpSquare extends SvelteComponent<TouchScreenSwipeUpSquareProps> {}
