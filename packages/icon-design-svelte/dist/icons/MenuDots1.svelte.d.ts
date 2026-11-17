import { SvelteComponent } from 'svelte';

export interface MenuDots1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuDots1 extends SvelteComponent<MenuDots1Props> {}
