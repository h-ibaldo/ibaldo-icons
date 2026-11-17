import { SvelteComponent } from 'svelte';

export interface ChartArrowUpRectanglePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpRectanglePlus extends SvelteComponent<ChartArrowUpRectanglePlusProps> {}
