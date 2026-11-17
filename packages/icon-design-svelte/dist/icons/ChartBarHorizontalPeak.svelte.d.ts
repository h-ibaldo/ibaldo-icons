import { SvelteComponent } from 'svelte';

export interface ChartBarHorizontalPeakProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarHorizontalPeak extends SvelteComponent<ChartBarHorizontalPeakProps> {}
