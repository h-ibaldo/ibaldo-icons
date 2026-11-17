import { SvelteComponent } from 'svelte';

export interface ChartBarHorizontalPeakAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarHorizontalPeakAxis extends SvelteComponent<ChartBarHorizontalPeakAxisProps> {}
