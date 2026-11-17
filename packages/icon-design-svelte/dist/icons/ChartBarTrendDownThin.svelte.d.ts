import { SvelteComponent } from 'svelte';

export interface ChartBarTrendDownThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarTrendDownThin extends SvelteComponent<ChartBarTrendDownThinProps> {}
