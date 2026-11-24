import { SvelteComponent } from 'svelte';

export interface ChartCandlestickTwoAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartCandlestickTwoAxis extends SvelteComponent<ChartCandlestickTwoAxisProps> {}
