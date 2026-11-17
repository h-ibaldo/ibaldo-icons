import { SvelteComponent } from 'svelte';

export interface NavigationDownRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationDownRightCircle extends SvelteComponent<NavigationDownRightCircleProps> {}
