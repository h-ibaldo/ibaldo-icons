import { SvelteComponent } from 'svelte';

export interface GridOddCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GridOddCircle extends SvelteComponent<GridOddCircleProps> {}
