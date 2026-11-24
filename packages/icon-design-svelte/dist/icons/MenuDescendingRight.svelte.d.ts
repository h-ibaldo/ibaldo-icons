import { SvelteComponent } from 'svelte';

export interface MenuDescendingRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuDescendingRight extends SvelteComponent<MenuDescendingRightProps> {}
