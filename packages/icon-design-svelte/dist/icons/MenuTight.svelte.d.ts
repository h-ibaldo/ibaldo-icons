import { SvelteComponent } from 'svelte';

export interface MenuTightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuTight extends SvelteComponent<MenuTightProps> {}
