import { SvelteComponent } from 'svelte';

export interface ChartLineRisingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineRising extends SvelteComponent<ChartLineRisingProps> {}
