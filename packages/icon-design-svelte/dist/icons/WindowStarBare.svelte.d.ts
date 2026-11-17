import { SvelteComponent } from 'svelte';

export interface WindowStarBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStarBare extends SvelteComponent<WindowStarBareProps> {}
