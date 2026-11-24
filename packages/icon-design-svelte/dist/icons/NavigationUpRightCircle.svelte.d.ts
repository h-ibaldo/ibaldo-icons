import { SvelteComponent } from 'svelte';

export interface NavigationUpRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpRightCircle extends SvelteComponent<NavigationUpRightCircleProps> {}
