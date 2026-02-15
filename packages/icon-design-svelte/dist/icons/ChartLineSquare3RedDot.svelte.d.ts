import { SvelteComponent } from 'svelte';

export interface ChartLineSquare3RedDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare3RedDot extends SvelteComponent<ChartLineSquare3RedDotProps> {}
