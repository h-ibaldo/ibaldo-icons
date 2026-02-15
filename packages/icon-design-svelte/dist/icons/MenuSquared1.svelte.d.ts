import { SvelteComponent } from 'svelte';

export interface MenuSquared1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSquared1 extends SvelteComponent<MenuSquared1Props> {}
