import { SvelteComponent } from 'svelte';

export interface NavigationUpCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpCircle extends SvelteComponent<NavigationUpCircleProps> {}
