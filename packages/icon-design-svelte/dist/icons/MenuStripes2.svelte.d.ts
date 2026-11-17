import { SvelteComponent } from 'svelte';

export interface MenuStripes2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuStripes2 extends SvelteComponent<MenuStripes2Props> {}
