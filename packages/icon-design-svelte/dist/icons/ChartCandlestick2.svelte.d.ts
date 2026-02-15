import { SvelteComponent } from 'svelte';

export interface ChartCandlestick2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartCandlestick2 extends SvelteComponent<ChartCandlestick2Props> {}
