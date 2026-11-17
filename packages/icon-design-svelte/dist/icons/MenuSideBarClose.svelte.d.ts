import { SvelteComponent } from 'svelte';

export interface MenuSideBarCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSideBarClose extends SvelteComponent<MenuSideBarCloseProps> {}
