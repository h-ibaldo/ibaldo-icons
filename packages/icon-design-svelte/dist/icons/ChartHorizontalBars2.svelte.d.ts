import { SvelteComponent } from 'svelte';

export interface ChartHorizontalBars2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartHorizontalBars2 extends SvelteComponent<ChartHorizontalBars2Props> {}
