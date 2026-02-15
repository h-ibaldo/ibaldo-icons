import { SvelteComponent } from 'svelte';

export interface TouchScreenSwipeDownSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenSwipeDownSquare extends SvelteComponent<TouchScreenSwipeDownSquareProps> {}
