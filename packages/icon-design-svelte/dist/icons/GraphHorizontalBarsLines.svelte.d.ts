import { SvelteComponent } from 'svelte';

export interface GraphHorizontalBarsLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GraphHorizontalBarsLines extends SvelteComponent<GraphHorizontalBarsLinesProps> {}
