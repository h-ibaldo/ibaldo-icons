import { SvelteComponent } from 'svelte';

export interface MenuThreeStripesCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeStripesCircle extends SvelteComponent<MenuThreeStripesCircleProps> {}
