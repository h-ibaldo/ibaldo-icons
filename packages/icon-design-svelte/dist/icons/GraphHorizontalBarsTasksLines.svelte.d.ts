import { SvelteComponent } from 'svelte';

export interface GraphHorizontalBarsTasksLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GraphHorizontalBarsTasksLines extends SvelteComponent<GraphHorizontalBarsTasksLinesProps> {}
