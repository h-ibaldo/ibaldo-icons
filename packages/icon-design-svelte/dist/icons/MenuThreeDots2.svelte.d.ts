import { SvelteComponent } from 'svelte';

export interface MenuThreeDots2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeDots2 extends SvelteComponent<MenuThreeDots2Props> {}
