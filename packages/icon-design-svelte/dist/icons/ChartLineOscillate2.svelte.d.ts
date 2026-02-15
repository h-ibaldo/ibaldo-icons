import { SvelteComponent } from 'svelte';

export interface ChartLineOscillate2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineOscillate2 extends SvelteComponent<ChartLineOscillate2Props> {}
