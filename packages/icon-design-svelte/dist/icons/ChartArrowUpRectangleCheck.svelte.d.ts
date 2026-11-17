import { SvelteComponent } from 'svelte';

export interface ChartArrowUpRectangleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpRectangleCheck extends SvelteComponent<ChartArrowUpRectangleCheckProps> {}
