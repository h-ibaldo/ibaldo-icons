import { SvelteComponent } from 'svelte';

export interface NavigationUpCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpCircleCheck extends SvelteComponent<NavigationUpCircleCheckProps> {}
