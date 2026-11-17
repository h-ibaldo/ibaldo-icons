import { SvelteComponent } from 'svelte';

export interface ChartLineUpAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineUpAxis extends SvelteComponent<ChartLineUpAxisProps> {}
