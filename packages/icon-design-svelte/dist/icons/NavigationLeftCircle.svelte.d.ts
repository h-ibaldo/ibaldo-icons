import { SvelteComponent } from 'svelte';

export interface NavigationLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationLeftCircle extends SvelteComponent<NavigationLeftCircleProps> {}
