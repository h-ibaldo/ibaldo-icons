import { SvelteComponent } from 'svelte';

export interface ChartLineSquare3PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare3Plus extends SvelteComponent<ChartLineSquare3PlusProps> {}
