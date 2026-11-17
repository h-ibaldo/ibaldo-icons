import { SvelteComponent } from 'svelte';

export interface ChartDonutStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartDonutStriped extends SvelteComponent<ChartDonutStripedProps> {}
