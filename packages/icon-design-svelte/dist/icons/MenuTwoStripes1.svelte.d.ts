import { SvelteComponent } from 'svelte';

export interface MenuTwoStripes1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuTwoStripes1 extends SvelteComponent<MenuTwoStripes1Props> {}
