import { SvelteComponent } from 'svelte';

export interface ChartGanttProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartGantt extends SvelteComponent<ChartGanttProps> {}
