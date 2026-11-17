import { SvelteComponent } from 'svelte';

export interface ChartLineSquarePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquarePlus extends SvelteComponent<ChartLineSquarePlusProps> {}
