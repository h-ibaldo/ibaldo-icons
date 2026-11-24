import { SvelteComponent } from 'svelte';

export interface ChartLinePeakProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeak extends SvelteComponent<ChartLinePeakProps> {}
