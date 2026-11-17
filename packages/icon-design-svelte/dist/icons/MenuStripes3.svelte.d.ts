import { SvelteComponent } from 'svelte';

export interface MenuStripes3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuStripes3 extends SvelteComponent<MenuStripes3Props> {}
