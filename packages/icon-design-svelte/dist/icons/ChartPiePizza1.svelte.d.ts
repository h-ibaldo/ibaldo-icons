import { SvelteComponent } from 'svelte';

export interface ChartPiePizza1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartPiePizza1 extends SvelteComponent<ChartPiePizza1Props> {}
