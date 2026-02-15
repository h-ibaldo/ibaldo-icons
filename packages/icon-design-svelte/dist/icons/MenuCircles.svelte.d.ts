import { SvelteComponent } from 'svelte';

export interface MenuCirclesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuCircles extends SvelteComponent<MenuCirclesProps> {}
