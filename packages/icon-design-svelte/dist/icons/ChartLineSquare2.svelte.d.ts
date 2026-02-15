import { SvelteComponent } from 'svelte';

export interface ChartLineSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare2 extends SvelteComponent<ChartLineSquare2Props> {}
