import { SvelteComponent } from 'svelte';

export interface ChartLineCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle extends SvelteComponent<ChartLineCircleProps> {}
