import { SvelteComponent } from 'svelte';

export interface ChartLineCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle2 extends SvelteComponent<ChartLineCircle2Props> {}
