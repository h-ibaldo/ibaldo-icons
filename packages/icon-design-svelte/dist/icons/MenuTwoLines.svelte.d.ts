import { SvelteComponent } from 'svelte';

export interface MenuTwoLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuTwoLines extends SvelteComponent<MenuTwoLinesProps> {}
