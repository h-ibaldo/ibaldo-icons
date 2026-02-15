import { SvelteComponent } from 'svelte';

export interface ChartLineIncrease1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineIncrease1 extends SvelteComponent<ChartLineIncrease1Props> {}
