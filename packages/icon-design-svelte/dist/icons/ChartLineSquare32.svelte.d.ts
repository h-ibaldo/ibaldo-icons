import { SvelteComponent } from 'svelte';

export interface ChartLineSquare32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare32 extends SvelteComponent<ChartLineSquare32Props> {}
