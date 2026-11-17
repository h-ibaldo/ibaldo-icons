import { SvelteComponent } from 'svelte';

export interface MenuDescendingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuDescending extends SvelteComponent<MenuDescendingProps> {}
