import { SvelteComponent } from 'svelte';

export interface NavigationUpCircleSegmentedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpCircleSegmented extends SvelteComponent<NavigationUpCircleSegmentedProps> {}
