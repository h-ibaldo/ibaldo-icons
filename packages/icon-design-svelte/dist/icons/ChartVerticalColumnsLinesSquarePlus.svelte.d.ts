import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsLinesSquarePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsLinesSquarePlus extends SvelteComponent<ChartVerticalColumnsLinesSquarePlusProps> {}
