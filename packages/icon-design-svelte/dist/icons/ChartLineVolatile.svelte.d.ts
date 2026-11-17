import { SvelteComponent } from 'svelte';

export interface ChartLineVolatileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineVolatile extends SvelteComponent<ChartLineVolatileProps> {}
