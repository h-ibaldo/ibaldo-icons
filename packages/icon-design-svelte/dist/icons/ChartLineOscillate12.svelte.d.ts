import { SvelteComponent } from 'svelte';

export interface ChartLineOscillate12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineOscillate12 extends SvelteComponent<ChartLineOscillate12Props> {}
