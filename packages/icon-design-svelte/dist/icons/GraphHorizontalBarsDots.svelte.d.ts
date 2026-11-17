import { SvelteComponent } from 'svelte';

export interface GraphHorizontalBarsDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GraphHorizontalBarsDots extends SvelteComponent<GraphHorizontalBarsDotsProps> {}
