import { SvelteComponent } from 'svelte';

export interface ChartArrowUpCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpCircle extends SvelteComponent<ChartArrowUpCircleProps> {}
