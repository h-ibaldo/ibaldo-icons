import { SvelteComponent } from 'svelte';

export interface MenuSideBarOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSideBarOpen extends SvelteComponent<MenuSideBarOpenProps> {}
