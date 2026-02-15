import { SvelteComponent } from 'svelte';

export interface TouchScreenSwipeRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenSwipeRightSquare extends SvelteComponent<TouchScreenSwipeRightSquareProps> {}
