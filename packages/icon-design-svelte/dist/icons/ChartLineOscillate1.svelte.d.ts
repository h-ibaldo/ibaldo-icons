import { SvelteComponent } from 'svelte';

export interface ChartLineOscillate1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineOscillate1 extends SvelteComponent<ChartLineOscillate1Props> {}
