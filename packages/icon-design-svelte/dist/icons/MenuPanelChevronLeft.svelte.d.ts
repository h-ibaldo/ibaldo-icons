import { SvelteComponent } from 'svelte';

export interface MenuPanelChevronLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuPanelChevronLeft extends SvelteComponent<MenuPanelChevronLeftProps> {}
