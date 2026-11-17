import { SvelteComponent } from 'svelte';

export interface MenuHamburger2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuHamburger2 extends SvelteComponent<MenuHamburger2Props> {}
