import { SvelteComponent } from 'svelte';

export interface ChartArrowUpCirclePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpCirclePlus extends SvelteComponent<ChartArrowUpCirclePlusProps> {}
