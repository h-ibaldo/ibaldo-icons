import { SvelteComponent } from 'svelte';

export interface ChartHorizontalBars1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartHorizontalBars1 extends SvelteComponent<ChartHorizontalBars1Props> {}
