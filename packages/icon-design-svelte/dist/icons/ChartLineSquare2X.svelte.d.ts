import { SvelteComponent } from 'svelte';

export interface ChartLineSquare2XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare2X extends SvelteComponent<ChartLineSquare2XProps> {}
