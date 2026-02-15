import { SvelteComponent } from 'svelte';

export interface ChartLineDecrease2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineDecrease2 extends SvelteComponent<ChartLineDecrease2Props> {}
