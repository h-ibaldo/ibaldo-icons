import { SvelteComponent } from 'svelte';

export interface MenuHamburger1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuHamburger1 extends SvelteComponent<MenuHamburger1Props> {}
