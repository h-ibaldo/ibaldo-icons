import { SvelteComponent } from 'svelte';

export interface ChartPie1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartPie1 extends SvelteComponent<ChartPie1Props> {}
