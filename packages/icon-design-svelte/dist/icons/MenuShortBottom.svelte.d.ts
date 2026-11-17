import { SvelteComponent } from 'svelte';

export interface MenuShortBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuShortBottom extends SvelteComponent<MenuShortBottomProps> {}
