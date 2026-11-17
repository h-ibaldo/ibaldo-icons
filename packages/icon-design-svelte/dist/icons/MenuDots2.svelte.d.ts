import { SvelteComponent } from 'svelte';

export interface MenuDots2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuDots2 extends SvelteComponent<MenuDots2Props> {}
