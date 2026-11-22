import { SvelteComponent } from 'svelte';

export interface GridPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GridPlus extends SvelteComponent<GridPlusProps> {}
