import { SvelteComponent } from 'svelte';

export interface NavigationUpRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpRightSquare extends SvelteComponent<NavigationUpRightSquareProps> {}
