import { SvelteComponent } from 'svelte';

export interface PresentationChartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PresentationChart extends SvelteComponent<PresentationChartProps> {}
