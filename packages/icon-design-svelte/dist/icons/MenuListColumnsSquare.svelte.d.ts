import { SvelteComponent } from 'svelte';

export interface MenuListColumnsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuListColumnsSquare extends SvelteComponent<MenuListColumnsSquareProps> {}
