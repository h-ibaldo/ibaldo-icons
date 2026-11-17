import { SvelteComponent } from 'svelte';

export interface ChartLineSquare3XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare3X extends SvelteComponent<ChartLineSquare3XProps> {}
