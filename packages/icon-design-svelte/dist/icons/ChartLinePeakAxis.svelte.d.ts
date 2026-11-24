import { SvelteComponent } from 'svelte';

export interface ChartLinePeakAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakAxis extends SvelteComponent<ChartLinePeakAxisProps> {}
