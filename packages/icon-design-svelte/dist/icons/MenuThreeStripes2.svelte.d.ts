import { SvelteComponent } from 'svelte';

export interface MenuThreeStripes2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuThreeStripes2 extends SvelteComponent<MenuThreeStripes2Props> {}
