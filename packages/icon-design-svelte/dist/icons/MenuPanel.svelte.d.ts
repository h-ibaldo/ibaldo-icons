import { SvelteComponent } from 'svelte';

export interface MenuPanelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuPanel extends SvelteComponent<MenuPanelProps> {}
