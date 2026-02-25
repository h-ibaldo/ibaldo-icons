import { SvelteComponent } from 'svelte';

export interface MenuThreeStripes3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeStripes3 extends SvelteComponent<MenuThreeStripes3Props> {}
