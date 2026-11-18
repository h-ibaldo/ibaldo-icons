import { SvelteComponent } from 'svelte';

export interface NavigationDownSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationDownSquare extends SvelteComponent<NavigationDownSquareProps> {}
