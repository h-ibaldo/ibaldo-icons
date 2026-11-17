import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsLinesCircleDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsLinesCircleDotted extends SvelteComponent<ChartVerticalColumnsLinesCircleDottedProps> {}
