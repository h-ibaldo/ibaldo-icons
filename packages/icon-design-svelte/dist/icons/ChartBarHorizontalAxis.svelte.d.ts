import { SvelteComponent } from 'svelte';

export interface ChartBarHorizontalAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarHorizontalAxis extends SvelteComponent<ChartBarHorizontalAxisProps> {}
