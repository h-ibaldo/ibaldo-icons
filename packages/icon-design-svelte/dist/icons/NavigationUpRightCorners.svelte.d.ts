import { SvelteComponent } from 'svelte';

export interface NavigationUpRightCornersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationUpRightCorners extends SvelteComponent<NavigationUpRightCornersProps> {}
