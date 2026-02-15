import { SvelteComponent } from 'svelte';

export interface ChartPiePizza12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartPiePizza12 extends SvelteComponent<ChartPiePizza12Props> {}
