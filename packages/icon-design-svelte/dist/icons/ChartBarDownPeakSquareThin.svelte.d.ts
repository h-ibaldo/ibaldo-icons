import { SvelteComponent } from 'svelte';

export interface ChartBarDownPeakSquareThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarDownPeakSquareThin extends SvelteComponent<ChartBarDownPeakSquareThinProps> {}
