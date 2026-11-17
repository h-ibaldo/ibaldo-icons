import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsLinesCircleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsLinesCircleX extends SvelteComponent<ChartVerticalColumnsLinesCircleXProps> {}
