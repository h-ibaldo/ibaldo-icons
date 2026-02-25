import { SvelteComponent } from 'svelte';

export interface MenuStripesLinesListHamburgerSquaredBoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuStripesLinesListHamburgerSquaredBox extends SvelteComponent<MenuStripesLinesListHamburgerSquaredBoxProps> {}
