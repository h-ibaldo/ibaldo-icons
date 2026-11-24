import { SvelteComponent } from 'svelte';

export interface MenuBarCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuBarCursor extends SvelteComponent<MenuBarCursorProps> {}
