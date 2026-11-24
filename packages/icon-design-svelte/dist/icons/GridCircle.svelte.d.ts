import { SvelteComponent } from 'svelte';

export interface GridCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GridCircle extends SvelteComponent<GridCircleProps> {}
