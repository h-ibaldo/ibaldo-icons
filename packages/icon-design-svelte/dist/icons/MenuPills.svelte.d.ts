import { SvelteComponent } from 'svelte';

export interface MenuPillsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuPills extends SvelteComponent<MenuPillsProps> {}
