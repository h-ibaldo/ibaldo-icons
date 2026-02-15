import { SvelteComponent } from 'svelte';

export interface MenuThreeStripes4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeStripes4 extends SvelteComponent<MenuThreeStripes4Props> {}
