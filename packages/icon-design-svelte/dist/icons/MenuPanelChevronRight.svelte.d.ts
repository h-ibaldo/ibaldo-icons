import { SvelteComponent } from 'svelte';

export interface MenuPanelChevronRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuPanelChevronRight extends SvelteComponent<MenuPanelChevronRightProps> {}
