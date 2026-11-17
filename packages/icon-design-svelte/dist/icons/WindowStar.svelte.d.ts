import { SvelteComponent } from 'svelte';

export interface WindowStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStar extends SvelteComponent<WindowStarProps> {}
