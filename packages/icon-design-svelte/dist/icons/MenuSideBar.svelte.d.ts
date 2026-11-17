import { SvelteComponent } from 'svelte';

export interface MenuSideBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSideBar extends SvelteComponent<MenuSideBarProps> {}
