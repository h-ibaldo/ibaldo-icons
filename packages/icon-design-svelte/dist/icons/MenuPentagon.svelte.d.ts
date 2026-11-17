import { SvelteComponent } from 'svelte';

export interface MenuPentagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuPentagon extends SvelteComponent<MenuPentagonProps> {}
