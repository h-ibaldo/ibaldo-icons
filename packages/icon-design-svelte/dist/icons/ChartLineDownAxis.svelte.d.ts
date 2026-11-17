import { SvelteComponent } from 'svelte';

export interface ChartLineDownAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineDownAxis extends SvelteComponent<ChartLineDownAxisProps> {}
