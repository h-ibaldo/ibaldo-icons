import { SvelteComponent } from 'svelte';

export interface NavigationUpLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpLeft extends SvelteComponent<NavigationUpLeftProps> {}
