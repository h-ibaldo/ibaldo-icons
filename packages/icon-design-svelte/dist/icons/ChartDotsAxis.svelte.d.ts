import { SvelteComponent } from 'svelte';

export interface ChartDotsAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartDotsAxis extends SvelteComponent<ChartDotsAxisProps> {}
