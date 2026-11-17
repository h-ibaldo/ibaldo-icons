import { SvelteComponent } from 'svelte';

export interface MenuNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuNarrow extends SvelteComponent<MenuNarrowProps> {}
