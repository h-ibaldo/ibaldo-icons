import { SvelteComponent } from 'svelte';

export interface NavigationLeftSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationLeftSquare extends SvelteComponent<NavigationLeftSquareProps> {}
