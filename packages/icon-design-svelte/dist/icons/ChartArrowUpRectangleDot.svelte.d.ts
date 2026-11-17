import { SvelteComponent } from 'svelte';

export interface ChartArrowUpRectangleDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpRectangleDot extends SvelteComponent<ChartArrowUpRectangleDotProps> {}
