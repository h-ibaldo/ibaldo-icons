import { SvelteComponent } from 'svelte';

export interface MenuSideBarNavigationOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSideBarNavigationOpen extends SvelteComponent<MenuSideBarNavigationOpenProps> {}
