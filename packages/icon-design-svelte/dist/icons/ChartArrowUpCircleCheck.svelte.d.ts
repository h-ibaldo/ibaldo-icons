import { SvelteComponent } from 'svelte';

export interface ChartArrowUpCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpCircleCheck extends SvelteComponent<ChartArrowUpCircleCheckProps> {}
