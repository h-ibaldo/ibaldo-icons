import { SvelteComponent } from 'svelte';

export interface ChartLineSquareXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquareX extends SvelteComponent<ChartLineSquareXProps> {}
