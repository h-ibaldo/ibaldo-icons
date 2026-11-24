import { SvelteComponent } from 'svelte';

export interface ChartBarPeakProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarPeak extends SvelteComponent<ChartBarPeakProps> {}
