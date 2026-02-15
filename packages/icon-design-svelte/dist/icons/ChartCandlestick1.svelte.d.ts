import { SvelteComponent } from 'svelte';

export interface ChartCandlestick1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartCandlestick1 extends SvelteComponent<ChartCandlestick1Props> {}
