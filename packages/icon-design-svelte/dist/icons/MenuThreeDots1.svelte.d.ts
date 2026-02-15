import { SvelteComponent } from 'svelte';

export interface MenuThreeDots1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeDots1 extends SvelteComponent<MenuThreeDots1Props> {}
