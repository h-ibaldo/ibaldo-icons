import { SvelteComponent } from 'svelte';

export interface ChartBarHorizontalAxisTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarHorizontalAxisTwo extends SvelteComponent<ChartBarHorizontalAxisTwoProps> {}
