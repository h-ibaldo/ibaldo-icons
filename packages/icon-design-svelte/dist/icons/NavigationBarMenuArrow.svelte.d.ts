import { SvelteComponent } from 'svelte';

export interface NavigationBarMenuArrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationBarMenuArrow extends SvelteComponent<NavigationBarMenuArrowProps> {}
