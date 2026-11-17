import { SvelteComponent } from 'svelte';

export interface NavigationUpSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpSquare extends SvelteComponent<NavigationUpSquareProps> {}
