import { SvelteComponent } from 'svelte';

export interface ChartPieProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartPie extends SvelteComponent<ChartPieProps> {}
