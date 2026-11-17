import { SvelteComponent } from 'svelte';

export interface GridRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GridRounded extends SvelteComponent<GridRoundedProps> {}
