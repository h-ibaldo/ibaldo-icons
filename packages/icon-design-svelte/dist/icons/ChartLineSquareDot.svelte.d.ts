import { SvelteComponent } from 'svelte';

export interface ChartLineSquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquareDot extends SvelteComponent<ChartLineSquareDotProps> {}
