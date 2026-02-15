import { SvelteComponent } from 'svelte';

export interface ChartLineDecrease1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineDecrease1 extends SvelteComponent<ChartLineDecrease1Props> {}
