import { SvelteComponent } from 'svelte';

export interface MenuHamburgerSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuHamburgerSquare extends SvelteComponent<MenuHamburgerSquareProps> {}
