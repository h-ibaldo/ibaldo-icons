import { SvelteComponent } from 'svelte';

export interface ChartBarSquareMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareMinus extends SvelteComponent<ChartBarSquareMinusProps> {}
