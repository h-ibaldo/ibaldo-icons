import { SvelteComponent } from 'svelte';

export interface ChartLineCircleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircleX extends SvelteComponent<ChartLineCircleXProps> {}
