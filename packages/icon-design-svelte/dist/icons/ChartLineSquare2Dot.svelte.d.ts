import { SvelteComponent } from 'svelte';

export interface ChartLineSquare2DotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare2Dot extends SvelteComponent<ChartLineSquare2DotProps> {}
