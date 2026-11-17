import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsLinesCirclePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsLinesCirclePlus extends SvelteComponent<ChartVerticalColumnsLinesCirclePlusProps> {}
