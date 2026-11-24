import { SvelteComponent } from 'svelte';

export interface MenuCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuCompact extends SvelteComponent<MenuCompactProps> {}
