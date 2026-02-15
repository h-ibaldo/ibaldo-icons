import { SvelteComponent } from 'svelte';

export interface NavigationBarMenuArrowCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NavigationBarMenuArrowCursor extends SvelteComponent<NavigationBarMenuArrowCursorProps> {}
