import { SvelteComponent } from 'svelte';

export interface MenuSquared2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSquared2 extends SvelteComponent<MenuSquared2Props> {}
