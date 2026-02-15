import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsLinesSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsLinesSquare extends SvelteComponent<ChartVerticalColumnsLinesSquareProps> {}
