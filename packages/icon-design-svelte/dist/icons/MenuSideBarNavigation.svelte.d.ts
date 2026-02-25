import { SvelteComponent } from 'svelte';

export interface MenuSideBarNavigationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSideBarNavigation extends SvelteComponent<MenuSideBarNavigationProps> {}
