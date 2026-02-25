import { SvelteComponent } from 'svelte';

export interface MenuThreeStripes1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeStripes1 extends SvelteComponent<MenuThreeStripes1Props> {}
