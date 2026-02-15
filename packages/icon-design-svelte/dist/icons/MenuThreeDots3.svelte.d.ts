import { SvelteComponent } from 'svelte';

export interface MenuThreeDots3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeDots3 extends SvelteComponent<MenuThreeDots3Props> {}
