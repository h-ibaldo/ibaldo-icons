import { SvelteComponent } from 'svelte';

export interface MenuSquareRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSquareRounded extends SvelteComponent<MenuSquareRoundedProps> {}
