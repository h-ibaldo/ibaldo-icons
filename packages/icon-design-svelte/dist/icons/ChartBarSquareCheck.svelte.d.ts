import { SvelteComponent } from 'svelte';

export interface ChartBarSquareCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareCheck extends SvelteComponent<ChartBarSquareCheckProps> {}
