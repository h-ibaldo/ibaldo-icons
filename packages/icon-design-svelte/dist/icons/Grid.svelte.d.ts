import { SvelteComponent } from 'svelte';

export interface GridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Grid extends SvelteComponent<GridProps> {}
