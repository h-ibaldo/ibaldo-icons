import { SvelteComponent } from 'svelte';

export interface ChartBarDownPeakSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarDownPeakSquare extends SvelteComponent<ChartBarDownPeakSquareProps> {}
