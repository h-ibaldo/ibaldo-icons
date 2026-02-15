import { SvelteComponent } from 'svelte';

export interface ChartLineIncrease2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineIncrease2 extends SvelteComponent<ChartLineIncrease2Props> {}
