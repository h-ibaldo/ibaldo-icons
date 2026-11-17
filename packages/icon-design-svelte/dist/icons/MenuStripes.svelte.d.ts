import { SvelteComponent } from 'svelte';

export interface MenuStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuStripes extends SvelteComponent<MenuStripesProps> {}
