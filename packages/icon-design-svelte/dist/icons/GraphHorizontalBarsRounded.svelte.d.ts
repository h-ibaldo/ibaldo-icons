import { SvelteComponent } from 'svelte';

export interface GraphHorizontalBarsRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GraphHorizontalBarsRounded extends SvelteComponent<GraphHorizontalBarsRoundedProps> {}
