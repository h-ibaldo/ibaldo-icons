import { SvelteComponent } from 'svelte';

export interface ChartCandlestickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartCandlestick extends SvelteComponent<ChartCandlestickProps> {}
