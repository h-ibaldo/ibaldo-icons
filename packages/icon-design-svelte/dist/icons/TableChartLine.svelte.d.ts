import { SvelteComponent } from 'svelte';

export interface TableChartLineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TableChartLine extends SvelteComponent<TableChartLineProps> {}
