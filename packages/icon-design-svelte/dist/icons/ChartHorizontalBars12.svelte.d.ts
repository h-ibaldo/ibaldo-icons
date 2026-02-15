import { SvelteComponent } from 'svelte';

export interface ChartHorizontalBars12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartHorizontalBars12 extends SvelteComponent<ChartHorizontalBars12Props> {}
