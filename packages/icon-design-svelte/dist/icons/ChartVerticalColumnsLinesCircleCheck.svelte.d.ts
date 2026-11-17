import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsLinesCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsLinesCircleCheck extends SvelteComponent<ChartVerticalColumnsLinesCircleCheckProps> {}
