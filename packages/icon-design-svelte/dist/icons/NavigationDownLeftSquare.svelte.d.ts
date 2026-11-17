import { SvelteComponent } from 'svelte';

export interface NavigationDownLeftSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationDownLeftSquare extends SvelteComponent<NavigationDownLeftSquareProps> {}
