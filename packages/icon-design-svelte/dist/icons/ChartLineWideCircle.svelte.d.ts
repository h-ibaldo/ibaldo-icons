import { SvelteComponent } from 'svelte';

export interface ChartLineWideCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineWideCircle extends SvelteComponent<ChartLineWideCircleProps> {}
