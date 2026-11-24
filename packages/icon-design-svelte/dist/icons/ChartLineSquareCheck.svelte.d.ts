import { SvelteComponent } from 'svelte';

export interface ChartLineSquareCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquareCheck extends SvelteComponent<ChartLineSquareCheckProps> {}
