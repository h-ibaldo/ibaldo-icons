import { SvelteComponent } from 'svelte';

export interface NavigationUpLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpLeftCircle extends SvelteComponent<NavigationUpLeftCircleProps> {}
