import { SvelteComponent } from 'svelte';

export interface NavigationRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationRightSquare extends SvelteComponent<NavigationRightSquareProps> {}
