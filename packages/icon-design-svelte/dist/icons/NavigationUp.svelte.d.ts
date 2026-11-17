import { SvelteComponent } from 'svelte';

export interface NavigationUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUp extends SvelteComponent<NavigationUpProps> {}
