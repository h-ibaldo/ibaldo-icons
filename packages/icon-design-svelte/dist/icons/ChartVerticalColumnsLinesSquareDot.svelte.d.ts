import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsLinesSquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsLinesSquareDot extends SvelteComponent<ChartVerticalColumnsLinesSquareDotProps> {}
