import { SvelteComponent } from 'svelte';

export interface NavigationDownLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationDownLeftCircle extends SvelteComponent<NavigationDownLeftCircleProps> {}
