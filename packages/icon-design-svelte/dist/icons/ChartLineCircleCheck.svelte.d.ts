import { SvelteComponent } from 'svelte';

export interface ChartLineCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircleCheck extends SvelteComponent<ChartLineCircleCheckProps> {}
