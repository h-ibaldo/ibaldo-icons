import { SvelteComponent } from 'svelte';

export interface MenuDots4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuDots4 extends SvelteComponent<MenuDots4Props> {}
