import { SvelteComponent } from 'svelte';

export interface MenuThreeStripesSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeStripesSquare extends SvelteComponent<MenuThreeStripesSquareProps> {}
