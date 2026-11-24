import { SvelteComponent } from 'svelte';

export interface ChartQuadrantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartQuadrant extends SvelteComponent<ChartQuadrantProps> {}
