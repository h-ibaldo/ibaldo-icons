import { SvelteComponent } from 'svelte';

export interface ChartBellAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBellAxis extends SvelteComponent<ChartBellAxisProps> {}
