import { SvelteComponent } from 'svelte';

export interface ChartBarSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquare extends SvelteComponent<ChartBarSquareProps> {}
