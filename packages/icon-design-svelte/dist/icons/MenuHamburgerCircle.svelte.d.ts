import { SvelteComponent } from 'svelte';

export interface MenuHamburgerCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuHamburgerCircle extends SvelteComponent<MenuHamburgerCircleProps> {}
