import { SvelteComponent } from 'svelte';

export interface TouchScreenSwipeLeftSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenSwipeLeftSquare extends SvelteComponent<TouchScreenSwipeLeftSquareProps> {}
