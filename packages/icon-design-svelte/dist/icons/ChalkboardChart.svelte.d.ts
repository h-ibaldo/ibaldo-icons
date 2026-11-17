import { SvelteComponent } from 'svelte';

export interface ChalkboardChartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChalkboardChart extends SvelteComponent<ChalkboardChartProps> {}
