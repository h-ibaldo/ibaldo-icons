import { SvelteComponent } from 'svelte';

export interface ChartLineSquare2RedDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare2RedDot extends SvelteComponent<ChartLineSquare2RedDotProps> {}
