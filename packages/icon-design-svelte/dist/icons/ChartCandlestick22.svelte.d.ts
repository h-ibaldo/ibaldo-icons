import { SvelteComponent } from 'svelte';

export interface ChartCandlestick22Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartCandlestick22 extends SvelteComponent<ChartCandlestick22Props> {}
