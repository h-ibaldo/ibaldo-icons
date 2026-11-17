import { SvelteComponent } from 'svelte';

export interface ChartLinePeakSquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakSquareDot extends SvelteComponent<ChartLinePeakSquareDotProps> {}
