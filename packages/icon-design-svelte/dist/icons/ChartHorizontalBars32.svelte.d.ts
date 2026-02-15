import { SvelteComponent } from 'svelte';

export interface ChartHorizontalBars32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartHorizontalBars32 extends SvelteComponent<ChartHorizontalBars32Props> {}
