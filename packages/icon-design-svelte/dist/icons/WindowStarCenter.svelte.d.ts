import { SvelteComponent } from 'svelte';

export interface WindowStarCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStarCenter extends SvelteComponent<WindowStarCenterProps> {}
