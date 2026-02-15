import { SvelteComponent } from 'svelte';

export interface ChartHorizontalBars4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartHorizontalBars4 extends SvelteComponent<ChartHorizontalBars4Props> {}
