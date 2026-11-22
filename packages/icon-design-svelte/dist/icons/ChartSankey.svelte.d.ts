import { SvelteComponent } from 'svelte';

export interface ChartSankeyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartSankey extends SvelteComponent<ChartSankeyProps> {}
