import { SvelteComponent } from 'svelte';

export interface ChartCandlestick12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartCandlestick12 extends SvelteComponent<ChartCandlestick12Props> {}
