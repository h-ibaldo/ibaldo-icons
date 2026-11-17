import { SvelteComponent } from 'svelte';

export interface NavigationDownCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationDownCircle extends SvelteComponent<NavigationDownCircleProps> {}
