import { SvelteComponent } from 'svelte';

export interface ChartGanttSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartGanttSquare extends SvelteComponent<ChartGanttSquareProps> {}
