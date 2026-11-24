import { SvelteComponent } from 'svelte';

export interface NavigationUpLeftSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpLeftSquare extends SvelteComponent<NavigationUpLeftSquareProps> {}
