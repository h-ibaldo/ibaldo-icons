import { SvelteComponent } from 'svelte';

export interface MenuGridSquaresSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuGridSquaresSmall extends SvelteComponent<MenuGridSquaresSmallProps> {}
