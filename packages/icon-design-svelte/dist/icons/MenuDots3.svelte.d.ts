import { SvelteComponent } from 'svelte';

export interface MenuDots3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuDots3 extends SvelteComponent<MenuDots3Props> {}
