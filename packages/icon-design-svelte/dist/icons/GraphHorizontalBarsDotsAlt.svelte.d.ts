import { SvelteComponent } from 'svelte';

export interface GraphHorizontalBarsDotsAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GraphHorizontalBarsDotsAlt extends SvelteComponent<GraphHorizontalBarsDotsAltProps> {}
