import { SvelteComponent } from 'svelte';

export interface NavigationDownRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationDownRightSquare extends SvelteComponent<NavigationDownRightSquareProps> {}
