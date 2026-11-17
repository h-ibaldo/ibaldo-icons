import { SvelteComponent } from 'svelte';

export interface NavigationUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpRight extends SvelteComponent<NavigationUpRightProps> {}
