import { SvelteComponent } from 'svelte';

export interface ChartLineCircle32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle32 extends SvelteComponent<ChartLineCircle32Props> {}
