import { SvelteComponent } from 'svelte';

export interface WindowStarCenterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStarCenterBare extends SvelteComponent<WindowStarCenterBareProps> {}
