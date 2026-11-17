import { SvelteComponent } from 'svelte';

export interface ChartLineSquare3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare3Check extends SvelteComponent<ChartLineSquare3CheckProps> {}
