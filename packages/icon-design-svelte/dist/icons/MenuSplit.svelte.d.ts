import { SvelteComponent } from 'svelte';

export interface MenuSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuSplit extends SvelteComponent<MenuSplitProps> {}
