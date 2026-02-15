import { SvelteComponent } from 'svelte';

export interface ChartHorizontalBars3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartHorizontalBars3 extends SvelteComponent<ChartHorizontalBars3Props> {}
